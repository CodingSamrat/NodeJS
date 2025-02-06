// console.log(1)
// console.log(2)
// console.log(3)




// if (counter % 2 === 1) {
//     console.log(`${counter} is a Odd Number`)
// } else {
//     console.log(`${counter} is a Even Number`)
// }


// let counter = 1
// let sum = 0
// while (counter <= 10) {
//     // console.log(`The Counter value is - ${counter}`)
//     console.log(counter)



//     // 1 2 3 4 5 
//     sum += counter

//     counter++
// }

// console.log(`TOtal - ${sum}`)


// find count of even and odd number 1 - 10

let odd = [];
let even = [];

let i = 1

while (i <= 10) {
    if (i % 2 === 0) {
        even.push(i)

    } else {
        odd.push(i)
    }

    i++
}


// if (1 % 2 === 0) {
//     even++
// } else {
//     odd++
// }

// if (2 % 2 === 0) {
//     even++
// } else {
//     odd++
// }

// if (3 % 2 === 0) {
//     even++
// } else {
//     odd++
// }

// if (4 % 2 === 0) {
//     even++
// } else {
//     odd++
// }

// if (5 % 2 === 0) {
//     even++
// } else {
//     odd++
// }


// console.log("even", even)
// console.log("odd", odd)


const allNumbers = [76, 45, 89, 87, 100, 45, 90, 34, 35, 87, 90]

// console.log(allNumbers[2])

let j = 0
while (j < allNumbers.length) {
    let num = allNumbers[j]

    const grade = checkGrade(num)
    console.log(grade)

    j++
}



function checkGrade(u) {
    if (u >= 80) {
        return "A+"
    } else if (u > 69 && u < 80) {
        return "B"
    } else if (u > 59 && u < 70) {
        return "C"
    } else {
        return "F"
    }
}

