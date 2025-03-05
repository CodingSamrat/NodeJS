// CommonJS
// const { showNotes, showNoteById } = require("./note"); 

// ESM
// import { showNoteById, showNotes } from "./note.js"




// showNotes()
// showNoteById(1) 


import notes, { showNoteById, addNote } from "./note.js";



// showNoteById()

// console.log(notes)

const notesOne = []
for (let i = 0; i < notes.length; i++) {
    const note = notes[i];

    notesOne.push(note.id == 2 ? note : null)


    // if (note.id == 2) {
    //     notesOne.push(note)
    // } else {
    //     notesOne.push(null)
    // }

}
console.log(notesOne);


const newNotes = notes.map((note) => { console.log(note) })
console.log(newNotes)