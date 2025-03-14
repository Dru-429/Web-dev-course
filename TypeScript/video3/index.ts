//how to type a veriable in ts

// let myName = "Dhruv"  JS

let myName: string = "Bob"  //TS
// Primitive Data Types: string, number, boolean

let numberOfWheels: number = 4
let isStudent: boolean = false


// video 7 : custom types

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

//video 9: Nested object type 

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

//video 10: Optional properties 

type OptionalAddress = {
    name: string
    age: number
    isStudent: boolean
    address?: Address
}

let person6: OptionalAddress = {
    name: "Joe",
    age: 42,
    isStudent: true,
}

function displayInfo(person){
    console.log( `${person.name} lives at ${person.address?.country}` )
}

displayInfo(person6)

//video -12: Typing Arrays

// let ages: number = [100, 101]  Type 'number[]' is not assignable to type 'number'.

let ages: number[] = [100, 101]
// or 
// let age = [100,101]

// ages.push(true) Argument of type 'boolean' is not assignable to parameter of type 'number'.

let people: Person[] = [person1, person2] 
//or
let peopleSyntax2: Array<Person> = [person1, person2]

//video 14 : Literal type 
let myName2: "Bob" = "Bob"
let myName4 = "Dru"  //let myName4: string
// let myName: "Bob" = "Bob" is same as how const store the type of a string 
const myName3 = "Bobby" //const myName3: "Bobby"

//video 15 : unions
// union can be only fixed types of string 

type User = {
    username: string
    role: "guest" | "member" | "admin"
}

type UserRole = "guest" | "member" | "admin"

type Psswd = number | string 

let numPassword: Psswd = 429
let alphaPassword: Psswd = "Dru429"

let userRole: UserRole = "admin"

// let userRole: UserRole = "sdfkjhsdkfjh"

//video 21 : Definig function return type and also beign explicite

const users: User[] = [
    { username: "john_doe", role: "member" },
    { username: "jane_doe", role: "admin" },
    { username: "guest_user", role: "guest" }
];

// function fetchUserDetails(username: string)  {  //function fetchUserDetails(username: string): User
//     const user = users.find(user => user.username === username)
//     if (!user) {
//         throw new Error(`User with username ${username} not found`)
//     }
//     return user
// }

// in the above case ts-put the type itself of the fn to user as it returns a object of type user , but if in the future some one change it to string output it will accept it ,.. it dont show the purpose of why 
// so We should always define the function type so that other developer know the purpose and if change act accordingly

function fetchUserDetails(username: string): User {
    const user = users.find(user => user.username === username)
    if (!user) {
        throw new Error(`User with username ${username} not found`)
    }
    return user
}

//also when a fn dont return anything type void to it as that other dev knows 

