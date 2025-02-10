import dotenv from 'dotenv';
dotenv.config();

import { MongoClient } from "mongodb";
import { writeFile, mkdir, } from 'fs/promises';
import { existsSync, createWriteStream } from 'fs';
import { join } from 'path';
import archiver from 'archiver';


// Connection URL
const client = new MongoClient(process.env.MONGO_URI);

// Database Name
const dbName = 'pos';
await client.connect(); // Connect to the MongoDB server
console.log('Connected successfully to server');

const db = client.db(dbName);
const collections = await db.collections();


async function exportData() {
    try {

        const date = new Date();
        const dateStr = `${String(date.getDate()).padStart(2, '0')}-${String(date.getMonth() + 1).padStart(2, '0')}-${date.getFullYear()}`;

        // Backup directory
        const backupDir = join(process.cwd(), 'bkp', dateStr);
        if (!existsSync(backupDir)) {
            await mkdir(backupDir, { recursive: true });
        }


        // Extract collection names
        const collectionNames = collections.map(col => col.collectionName);

        for (let i = 0; i < collectionNames.length; i++) {
            const collectionName = collectionNames[i];

            const coll = db.collection(collectionName);
            const docs = await coll.find({}).toArray();

            // TODO: write to ./bkp/<DD-MM-YYYY>/<collName.json>
            const filePath = join(backupDir, `${collectionName}.json`);
            await writeFile(filePath, JSON.stringify(docs, null, 2), 'utf8');

            console.log(`-> Exported ${collectionName} to ${filePath}`);
        }

        // Create a ZIP archive
        const zipDir = join(process.cwd(), 'backup');
        const zipPath = join(process.cwd(), 'backup', `backup-${dateStr}.zip`);
        if (!existsSync(zipDir)) {
            await mkdir(zipDir, { recursive: true });
        }
        const output = createWriteStream(zipPath);
        const archive = archiver('zip', { zlib: { level: 9 } });

        output.on('close', () => console.log(`Backup ZIP created: ${zipPath}`));
        archive.pipe(output);
        archive.directory(backupDir, false);
        await archive.finalize();


    } catch (error) {
        console.error('Error fetching data:', error);
    } finally {
        await client.close(); // Ensure the client is closed
        console.log('Connection closed');
    }
}


async function importData() {
    try {
        const date = new Date();
        const dateStr = `${String(date.getDate()).padStart(2, '0')}-${String(date.getMonth() + 1).padStart(2, '0')}-${date.getFullYear()}`;

        const zipPath = join(process.cwd(), 'backup', `backup-${dateStr}.zip`);
        const extractPath = join(process.cwd(), 'bkp', dateStr);

        // Check if the backup ZIP file exists
        if (!existsSync(zipPath)) {
            console.error('Backup file not found:', zipPath);
            return;
        }

        // Extract ZIP file
        console.log('Extracting backup...');
        await new Promise((resolve, reject) => {
            createReadStream(zipPath)
                .pipe(unzipper.Extract({ path: extractPath }))
                .on('close', resolve)
                .on('error', reject);
        });

        console.log('Backup extracted successfully:', extractPath);

        // Read and insert each JSON file into its collection
        const collections = await db.collections();
        for (const collection of collections) {
            const collectionName = collection.collectionName;
            const filePath = join(extractPath, `${collectionName}.json`);

            if (!existsSync(filePath)) {
                console.warn(`Skipping ${collectionName}, no backup file found.`);
                continue;
            }

            const fileContent = await readFile(filePath, 'utf8');
            const documents = JSON.parse(fileContent);

            if (documents.length > 0) {
                await db.collection(collectionName).insertMany(documents);
                console.log(`-> Imported ${documents.length} records into ${collectionName}`);
            }
        }
    } catch (error) {
        console.error('Error importing data:', error);
    } finally {
        await client.close(); // Close the connection
        console.log('Connection closed');
    }
}

// Call the function
(async () => {
    await exportData();
    // console.log('Final Data:', data);
})();
