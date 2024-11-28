// const fs = require("fs")
import fs from "fs"

console.log("here we go ")
// fs.writeFileSync("dru.txt","Dru is greate frontend dev ") //problematic as it stop the futher command to run untile the file is compeletly writen but js works oin asny so avoid using it 

fs.writeFile("dru429.txt","Dru is greate frontend developer and now doing backend  ", ()=> {
    console.log("Ending ....")
    fs.readFile("dru429.txt", (error,data) => {
        console.log(error)

        console.log(data)
        console.log(data.toString())
        // putting more write and read file in it ...then this is called callback  HELLLL
    } )
})  

fs.appendFile("dru429.txt", "This is i want to append in the fiel ", (e,d)=> {
    console.log("After Appending ")
    console.log(d)
} )

console.log("Ending")


//output  :: a async approch 
//[Running] node "c:\Users\RANIYA SAHOO\OneDrive\Desktop\Web Dev\NodeJs\video87\main.js"
// here we go 
// Ending
// Ending ....