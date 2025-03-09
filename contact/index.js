

import fs from "fs";
import path from "path";
import readline from "readline";



const dbFilePath = path.join("data", "database.json")


async function writeToDatabase(data) {
    await fs.writeFileSync(dbFilePath, JSON.stringify(data, null, 4))
}


async function readFromDatabase() {
    const data = await fs.readFileSync(dbFilePath, 'utf-8')
    return JSON.parse(data)
}


async function addStudent() {

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    const newStudent = {}

    await rl.question('Enter your name: ', (name) => {
        newStudent.name = name;

        rl.question('Enter your class: ', (cls) => {
            newStudent.class = cls;

            rl.question('Enter your roll number: ', (roll) => {
                newStudent.roll = roll;

                rl.question('Enter your age: ', async (age) => {
                    newStudent.age = age;

                    const db = await readFromDatabase()
                    db.push(newStudent)
                    // unique id 

                    await writeToDatabase(db)

                    rl.close();
                });
            });
        });
    });
}

async function showAllStudent() {

}

async function showStudentDetails(id) {

}

async function deleteAllStudent() {

}

// await writeToDatabase(newDb)

await addStudent();