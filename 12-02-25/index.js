// import { calculate } from "./calcuator"

// const c = require('./c')
// const result = c.calculate(52, '+', 54)

// console.log(result)



const users = [
    {
        id: 1,
        name: 'Samrat',
        phone: '345345',
        email: 'sam@techbaan.com',
        password: '123',
        isAdmin: false,
    },
    {
        id: 2,
        name: 'Santo',
        phone: '99999999',
        email: 'santo@techbaan.com',
        password: '1234',
        isAdmin: false,
    },
    {
        id: 2,
        name: 'Rahul',
        phone: '235435',
        email: 'rahul@techbaan.com',
        password: '333',
        isAdmin: false,
    },
]


// Write a function, to Authenticate User

// login('999999999','123)
// SUCCESS
// - Hi Samrat, Welcome to Facebook
// Filed
// Wrong Credential


function login(email, password) {

    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        // find the user by email id
        if (user.email === email) {
            // check password
            if (user.password === password) {
                // console.log('Login success')
                return true
            } else {
                // console.log('Login Failed')
                return false
            }
        }

    }

    return false

}



const isLogin = login('santo@techbaan.com', '1234')

console.log('isLogin', isLogin)





function findUserByEmail(email) {
    let user = null;

    // console.log('name, email, phone')
    for (let i = 0; i < users.length; i++) {
        let user1 = users[i]
        //console.log(user1)
        if (user1.email === email) {
            //console.log("email", user1)
            //.log("name ".concat(user1.nam            console.log("id",)
            //e))
            //.log("phone", user1.phone)
            // console.log("password", user1.password)
            //console.log("isadmin", user1.isAdmin)
            let result = `id: ${user1.id}, name: ${user1.name}, phone: ${user1.phone}`

            return result;

        }

    }

    return user
}
let result1 = findUserByEmail("santo@techbaan.com")
console.log(`result1`, result1)
let name = "Badol";
let middleName = "kumar";
let lastName = "Majumdar";

let fullName = name + " " + middleName + " " + lastName
console.log(fullName);


let fullName1 = (`${name} ${middleName} ${lastName}`);
console.log(fullName1);