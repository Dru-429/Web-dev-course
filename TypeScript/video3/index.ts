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

//video 8: Nested object type 

// type PersonWithAddress = {
//     name: string
//     age: number
//     isStudent: boolean
//     address: {
//         street: string
//         city: string
//         country: string
//     }
// }

// or

type Address = {
    street: string,
    city: string,
    country: string
}

type PersonWithAddress = {
    name: string
    age: number
    isStudent: boolean
    address: Address
}

let person3: PersonWithAddress = {
    name: "Joe",
    age: 42,
    isStudent: true,
    address: {
        street: "123 Main",
        city: "Anytown",
        country: "USA"
    }
}

let person4: PersonWithAddress = {
    name: "Jill",
    age: 66,
    isStudent: false,
    address: {
        street: "123 Main",
        city: "Anytown",
        country: "USA"
    }
}