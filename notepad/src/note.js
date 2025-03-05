
const notes = [
    { id: 1, title: "Meeting Notes", note: "Discuss project timeline." },
    { id: 2, title: "Shopping List", note: "Milk, eggs, bread, butter." },
    { id: 3, title: "Ideas", note: "Work on a new blog post." }
];



function showNotes() {
    for (let i = 0; i < notes.length; i++) {
        const note = notes[i];
        console.log(note)
    }
}


export function showNoteById(id) {
    for (let i = 0; i < notes.length; i++) {
        const note = notes[i];
        if (note.id === id) {
            console.log(note)
        }
    }
}

export function addNote(note) {
    notes.push(note)
}

export default notes;

// CommonJS
// module.exports = {
//     showNoteById,
//     showNotes,
//     addNote,
// }