import fs from "fs/promises"

//to avoid callback hell use await and promises 

let a = await fs.readFile("dru429.txt") 

// let b = await fs.writeFile("")... it rewrite the file 
let c = await fs.appendFile("dru429.txt","\nThis is a append line using await fn")


console.log(a.toString())