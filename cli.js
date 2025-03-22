import readline from "readline"
const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout,
});
function mainMenu() {
    console.log("\n\nWelcome to iNote. \nChoose a menu")
    console.log("1. Add Note")
    console.log("2. Show All Note")
    console.log("3. Show Note By Id")
    console.log("4. Exit")

    let _id = null


    rl.question('Your Choice: ', (id) => {
        // console.log(name);
        _id = id
        switch (_id) {
            case '1':
                addNewNote();
                break;
            case '2':
                showAllNote();
                break;
            case '3':
                showNoteById();
                break;
            case '4':
                rl.close();
                break;
            default:
                rl.close();
                break;
        }

    });
}


function addNewNote() {
    console.log("adding new note")

    //...
    mainMenu()
}

function showAllNote() {
    console.log("Showing all notes")


    //...
    mainMenu()
}

function showNoteById() {
    // readline ...
    console.log("Showing note with id - ")


    //...
    mainMenu()
}



//.......................................
mainMenu()