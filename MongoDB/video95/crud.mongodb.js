use("CrudDb")
console.log(db)

// C R E A T E
// db.createCollection("courses")

// db.courses.insertOne({         //pass object
//     name: "Web Dev Free",
//     platfrom: "Youtube ",
//     price: "0"
// })

// db.courses.insertMany([   //Pass array with objects

//     { name: "Web Development for Beginners", platform: "Youtube", price: "0" },
//     { name: "Frontend Masters Courses", platform: "Frontend Masters", price: "49" },
//     { name: "The Odin Project Curriculum", platform: "The Odin Project", price: "0" },
//     { name: "FreeCodeCamp Curriculum", platform: "FreeCodeCamp", price: "0" },
//     { name: "Scrimba Interactive Courses", platform: "Scrimba", price: "29" },
//     { name: "Udemy Courses", platform: "Udemy", price: "10-200" },
//     { name: "Coursera Courses", platform: "Coursera", price: "29-99" },
//     { name: "Codecademy Interactive Courses", platform: "Codecademy", price: "39" }
// ])

// R E A D
// let a = db.courses.find({price:"0"})
let b = db.courses.findOne({price:"0"}) // gives fist element 
// console.log(a.toArray())
console.log(b)

//U P D A T E 
db.courses.updateOne(
    {price:"0"},
    {$set :{price:"100"}}
)

//D E L E T
db.courses.deleteMany(
    {price: "100"}
)


// https://www.mongodb.com/docs/manual/reference/operator/query/