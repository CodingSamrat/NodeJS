// const Arr_1 = ["Badol", "Shomrat", "Rudra", "Chandhon", "joy"]


// function Function_Parameter(num) {
//     for (let i = 0; i <= Arr_1.length; i++) {
//         let result = Arr_1[i];
//         if (result === num) {
//             return ("Login");

//         }
//     }
//     return ("faild");
// }
// let result = Function_Parameter("joy");
// console.log(result);



const Array_Object = [

    {
        name: "Badol",
        age: 20,
        Location: "nahata",
        mobile: 7001412706,

    },

    {
        name: "Shomrat",
        age: 21,
        location: "kolkata",
        mobile: 8001412706,

    },
    {
        name: "Akash",
        age: 22,
        location: "gopalnagor",
        mobile: 900141706
    }
]


for (let i = 0; i <= Array_Object.length; i++) {
    //console.log(Array_Object[i])
    let result = Array_Object[i]?.mobile;
    console.log(result);
}
