import fs from 'fs'
import path from 'path';

// Read content of any file
// const allFiles = await fs.readFileSync('./src/db/data.txt', 'utf-8')
// console.log(allFiles)

// Write content to a file
// await fs.writeFileSync('./src/db/data.txt', '\n\nrr', { flag: 'a' })


// console.log('Name- Samrat')
// console.log('Name-\nSamrat')
// console.log('Name-\tSamrat')


// If a file or Directory exist or not
// const isExist = await fs.existsSync('./src/dbss')
// console.log(isExist)




// const dirs = await fs.readdirSync('./src')
// console.log(dirs)


// Check status of a path.
// const status = await fs.statSync('./src')
// if (status.isFile()) {
//     console.log('Its a file.')
// } else {
//     console.log('Its a directory.')
// }



// for (let i = 0; i < dirs.length; i++) {
//     const item = dirs[i];
//     // console.log(item)

//     // const dirPath = path.join()
//     const status = await fs.statSync(`./src/${item}`)
//     if (status.isFile()) {
//         console.log(item, 'Its a file.')
//     } else {
//         console.log(item, 'Its a directory.')
//     }
// }


// await fs.copyFileSync('./src/db/data.txt', './src')


function addNumber(a, b, cb) {
    cb(213)
    return a + b
}

const addNumberArrow = (a, b) => {
    // asd
    return a + b
}

const addNumberArrowDirectReturn = (a, b) => a + b;


// console.log(addNumberArrow(2, 3))

// function callback() {
//     console.log('adding two number')
// }


console.log(addNumber(3, 6, (n) => { console.log('adding two number', n) }))