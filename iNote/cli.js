import readline from 'readline'



const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let newName;
let newNumber;


await rl.question("Name: ", (name) => {
    newName = name
    rl.close();
});


await rl.question("Mobile Number: ", (number) => {
    newNumber = number
    rl.close();
});


console.log(newName, newNumber)