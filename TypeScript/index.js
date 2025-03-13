const menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
]

const cashInRegister = 100
const nextOrderId = 1
const orderQueue = []

function addNewPizza(pizzaObj) {
    menu.push(pizzaObj)
}

function placeOrder(pizzaName) {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    cashInRegister += selectedPizza.price
    const newOrder = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" }
    orderQueue.push(newOrder)
    return newOrder
}

function completeOrder(orderId) {
    const order = orderQueue.find(order => order.id === orderId)
    order.status = "completed"
    return order
}

// function placeOrder( pizzaName ) {
//     menu.map( (pizzaObject, index) => {
        
//         let orderObject = {}
//         if (pizzaObject.name === pizzaName ) {
//             cashInResister += pizzaObject.price
//             orderObject = {
//                 pizza: pizzaObject.name,
//                 status: "ordered"
//             }

//             return orderObject
//         }
//     })
// }

addNewPizza({ name: "Chicken Bacon Ranch", cost: 12 })
addNewPizza({ name: "BBQ Chicken", cost: 12 })
addNewPizza({ name: "Spicy Sausage", cost: 11 })

placeOrder("Chicken Bacon Ranch")
completeOrder("1")

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)


// Output
// cashInRegister += selectedPizza.price
//                 ^
// TypeError: Assignment to constant variable.
//     at placeOrder (c:\Users\RANIYA SAHOO\OneDrive\Desktop\Web Dev\TypeScript\index.js:18:20)
//     at Object.<anonymous> (c:\Users\RANIYA SAHOO\OneDrive\Desktop\Web Dev\TypeScript\index.js:50:1)
//     at Module._compile (node:internal/modules/cjs/loader:1358:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1416:10)
//     at Module.load (node:internal/modules/cjs/loader:1208:32)
//     at Module._load (node:internal/modules/cjs/loader:1024:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:174:12)
//     at node:internal/main/run_main_module:28:49
