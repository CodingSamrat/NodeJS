import fs from "fs";
import Readline from "readline";
import path from "path";

const dbPath = path.join('..', "data", "db", "database.json")
console.log(dbPath)

function Writetofile(data) {

        fs.writeFileSync(dbPath, JSON.stringify(data, null, 4))

}


function Readfromdata() {
        const Read_File = fs.readFileSync("./file.json", "utf-8");
        return JSON.parse(Read_File);
}
// const All_data = Readfromdata()
// console.log(All_data)






function Registration() {


        const rl = Readline.createInterface({

                input: process.stdin,
                output: process.stdout,
        });

        const New_Register = {}

        rl.question('Enter your Full-Name: ', (name) => {
                // console.log(name);
                New_Register.name = name

                rl.question('Enter your Mobile: ', (Mobile) => {
                        //console.log(Mobile);
                        New_Register.Mobile = Mobile

                        rl.question('Enter your Email: ', (Email) => {
                                //console.log(Email);
                                New_Register.Email = Email

                                rl.question('Enter your password: ', (Password) => {
                                        //console.log(password);
                                        New_Register.Password = Password

                                        rl.question('Enter your Age: ', (Age) => {
                                                //console.log(age);
                                                New_Register.Age = Age

                                                const dbarray = Readfromdata()

                                                dbarray.push(New_Register);

                                                Writetofile(dbarray);



                                                rl.close();


                                        });

                                });

                        });

                });


        });

}
// const Complete_Register = Registration();

//console.log(Complete_Register)



//  const All_data = Readfromdata()
// console.log(All_data[])

const Read_filesinc = fs.readFileSync("file.json", "utf-8")

const Read_file_parse = JSON.parse(Read_filesinc)
//console.log(Read_file_parse.length)

function Login(Mobile, Password) {

        for (let i = 0; i < Read_file_parse.length; i++) {
                const element1 = Read_file_parse[i].Mobile;

                const element2 = Read_file_parse[i].Password;


                //console.log(element1)

                if (Mobile === element1 && Password === element2) {
                        return "login"
                }

        }
        return "faild"




}
const Last_Result = Login('9933038290', '123456');
console.log(Last_Result);