function EvenOdd(n) {
    if (n % 2 == 0) {
        return "Even"
    } else {
        return "Odd"
    }
}


// for (let i = 0; i < numbers.length; i++) {
//     const num = numbers[i]


//     const result = EvenOdd(num)
//     console.log(num, result)
// }

// function isPrime(n) {
//     if (n < 2) return false; // 0 and 1 are not prime numbers
//     if (n === 2) return true; // 2 is the only even prime number
//     if (n % 2 === 0) return false; // Eliminate even numbers

//     for (let i = 3; i * i <= n; i += 2) {
//         console.log(i, n)
//         // if (n % i === 0) return false;
//     }
//     return true;
// }

// isPrime(101)

const obj = {
    name: 'Sam',
    roll: 34
}

// console.log(obj.name)


// const n1 = numbers[0]
// const n2 = numbers[1]
// const n3 = numbers[2]
// const n4 = numbers[3]
// const n5 = numbers[4]
// const n6 = numbers[5]

// sum = n1 + n2 + n3 + n4 + n5 + n6
const numbers = [32, 54, 77, 73, 93, 10]

let sum = 0


// for (let i = 0; i < numbers.length; i++) {
//     const n = numbers[i];
//     console.log(numbers)
//     console.log(`${sum} + ${n} = ${sum + n}`)
//     sum += n
// }

// console.log(sum)

const num = 5

// for (let i = 1; i <= 10; i++) {
//     // console.log(i * num)
//     console.log(`${num} x ${i} = ${num * i}`)
//     // 5 x 1 = 5
// }

// const arr = []

// for (let i = 6; i > 0; i--) {
//     arr.push(i)
//     console.log(i, arr)
// }


// arr.push(6)
// console.log(arr)

// arr.push(5)
// console.log(arr)

// arr.push(4)
// console.log(arr)

// arr.push(3)
// console.log(arr)

// arr.push(2)
// console.log(arr)

// arr.push(1)
// console.log(arr)


/**
- Calculate the sum of numbers from 1 to 100 using a for loop.
- Calculate the factorial of a number using a for loop.
- Find the sum of all even numbers between 1 and 100.
- Print all numbers divisible by 3 and 5 from 1 to 100.
- Count the number of digits in a given number using a for loop.
 */


const places = ["Kolkata", "Patna", "Mumbai"]
// for (let i = 0; i < places.length; i++) {
//     const place = places[i];
//     console.log(place)
// }


// for (let i = 0; i < 10; i++) {
//     for (let i = 0; i < places.length; i++) {
//         const place = places[i];
//         console.log(place)
//     }
// }



// for (let i = 0; i < places.length; i++) {
//     const place = places[i];

//     for (let i = 0; i < 10; i++) {
//         console.log(place)
//     }

// }
2
for (let i = 0; i < 5; i++) {
    // console.log('i', i)
    let a = ''

    for (let j = i; j < 5; j++) {
        a += '*'

    }
    console.log(a)
}