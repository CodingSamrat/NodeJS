import fs from "fs";

//fs.writeFileSync("./file.json", "hello ")


const obj = {
    name: 'asd'
}

// const Read_File = fs.readFileSync("./file.json", "utf-8");

// const parsedData = JSON.parse(Read_File)

// console.log(Read_File);
// console.log(parsedData.length);

const notes = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
]

// JSON.parse - json -> node js object
// JSON.stringify - node js object -> json
// fs.writeFileSync("./file.json", JSON.stringify(notes, null, 4))

console.log(JSON.stringify(notes))