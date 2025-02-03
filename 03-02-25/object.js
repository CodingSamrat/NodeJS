// Object....



const userAddress = {}


console.log(Object.keys(userAddress))
console.log(Object.values(userAddress))
// const address = {
//     vill: 'Nahata'
// }

const user = {
    name: 'Rahul',
    age: 12,
    class: 6,
    hobby: ['sports', 'travel'],
}

// userAddress = {
//     ...user,
//     ...address
// }

// delete userAddress.hobby
// delete userAddress.age

userAddress['PO'] = 'Gopalnagar'
userAddress['state'] = 'Gopalnagar'
userAddress['user'] = user
// console.log(user.name, user.age)
// console.log(`The name of user is ${user.name} and his age is ${user.age}`.replace())

console.log(Object.keys(userAddress))
console.log(Object.values(userAddress))

// console.log(userAddress['PO'])


console.log(userAddress)
// console.log(Object.create())