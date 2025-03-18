import fs from "fs";

import Readline from "readline";

const Object = {
    id: 1,
    name: "badol"
};
const array = [];

if (fs.existsSync("file.JSON")) {
    console.log(true)
} else {
    console.log(false)
    writetofile([])
}

function writetofile(data) {
    fs.writeFileSync("file.json", JSON.stringify(data, null, 4))


}
//writetofile(Object);



function readfromfile() {
    const readfile = fs.readFileSync("file.json", "utf-8");
    return JSON.parse(readfile);
}
//console.log(readfromfile())
//const db = readfromfile()
//db.push({
//     id: 1,
//     name: "shomrat"
// })
// console.log(db)


function addNewStudent() {

    const rl = Readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    })
    const newstudent = {};
    rl.question("Write Id:", (id) => {
        //console.log(id);
        newstudent.id = id;
        rl.question("write Name", (name) => {

            //console.log(name);
            newstudent.name = name;
            //[const db = writetofile(newstudent)
            const db = readfromfile()
            db.push(newstudent)
            writetofile(db);
            console.log(db)
            rl.close();
        })

    });












}
addNewStudent()