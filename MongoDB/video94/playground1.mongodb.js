
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('SigmaDB');

//Dont pass the id as db creates its own 
let courses = [
    {
        "Name": "Java",
        "Price": 2000,
        "Instructor": "Harry"
    },
    {
        "Name": "Python",
        "Price": 1500,
        "Instructor": "David"
    },
    {
        "Name": "JavaScript",
        "Price": 1800,
        "Instructor": "Sarah"
    },
    {
        "Name": "C++",
        "Price": 2500,
        "Instructor": "Michael"
    },
    {
        "Name": "C#",
        "Price": 2200,
        "Instructor": "Emily"
    },
    {
        "Name": "Ruby on Rails",
        "Price": 2800,
        "Instructor": "Alex"
    },
    {
        "Name": "React",
        "Price": 1600,
        "Instructor": "Olivia"
    },
    {
        "Name": "Angular",
        "Price": 1900,
        "Instructor": "Noah"
    },
    {
        "Name": "Vue.js",
        "Price": 1700,
        "Instructor": "Ava"
    },
    {
        "Name": "Node.js",
        "Price": 1400,
        "Instructor": "Ethan"
    }
]

// Insert a few documents into the courses collection.
db.getCollection('Courses').insertMany(courses);

console.log("Data Inserted...!")
