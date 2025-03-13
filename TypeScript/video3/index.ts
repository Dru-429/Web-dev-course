//how to type a veriable in ts

// let myName = "Dhruv"  JS

let myName: string = "Bob"  //TS
// Primitive Data Types: string, number, boolean

let numberOfWheels: number = 4
let isStudent: boolean = false


// video 6 : custom types

type Food = string

let favFood : Food = "Pizza"


type Person = {
    name: string,
    age: number,
    isStudent: boolean
}

let person1: Person = {
    name: "Joe",
    age: 42,
    isStudent: true
}

let person2: Person = {
    name: "Jill",
    age: 66,
    // isstudent: false
    isStudent: false
}