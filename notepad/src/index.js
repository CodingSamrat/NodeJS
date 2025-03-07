// CommonJS
// const { showNotes, showNoteById } = require("./note");

// ESM
// import { showNoteById, showNotes } from "./note.js"




// showNotes()
// showNoteById(1)


// import notes, { showNoteById, addNote } from "./note.js";



// showNoteById()

// console.log(notes)

// const notesOne = []
// for (let i = 0; i < notes.length; i++) {
//     const note = notes[i];

//     notesOne.push(note.id == 2 ? note : null)


//     // if (note.id == 2) {
//     //     notesOne.push(note)
//     // } else {
//     //     notesOne.push(null)
//     // }

// }
// //console.log(notesOne);


// const newNotes = notes.map((note) => { console.log(note) })
// //console.log(newNotes)


// import { Array_Object } from "./index1.js";

// const result = Array_Object

// for (let i = 0; i < result.length; i++) {
//     const result = Object.keys(Array_Object[i]);
//     console.log(result);
// }



const notes = [
    { id: 1, title: "Meeting Notes", note: "Discuss project timeline." },
    { id: 2, title: "Shopping List", note: "Milk, eggs, bread, butter." },
    { id: 3, title: "Ideas", note: "Work on a new blog post." }
];

const keys = Object.keys(notes[1]);
console.log(keys);

const values = Object.values(notes[1]);
console.log(values);


// for (let i = 0; i < notes.length; i++) {
//     const result = Object.keys(notes[1]);
//     console.log(result);
// }