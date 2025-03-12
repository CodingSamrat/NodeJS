import path from "path";
import fs from "fs";

const dbFileName = 'db.json'
const dbDirPath = path.join("db/43/546/234") //  "db/43/546/234"
const filePath = path.join(dbDirPath, dbFileName) //  "db/43/546/234/db.json"



if (!fs.existsSync(dbDirPath)) {

    fs.mkdirSync(dbDirPath, { recursive: true })
    fs.writeFileSync(filePath, JSON.stringify(["asdds"]))

} else {
    fs.writeFileSync(filePath, JSON.stringify(["asdds"]))

}
