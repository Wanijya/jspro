// Merging two array of data fetched from separate APIs into a single list.
const name = ["John", "Smith", "Doe", "Oregon", "Mary"]
const lastname = ["Dock", "Ari", "Johnson", "Git", "Sow"]
const fullname = [...name, ...lastname]
console.log(fullname)

// Filtering an array of objects to display items based on a search query (e.g. filtering products by name).
const products = [
    { name: "Apple", price: 1.5 },
    { name: "Banana", price: 0.8 },
    { name: "Orange", price: 1.5 },
    { name: "Grapes", price: 1.0 },
    { name: "Mango", price: 1.7 },
]
const newarr = products.filter(function(product){
    return product.price === 1.5
}) 
console.log(newarr);

// Mapping over an array of users data to create a list of user cards.
const users = [
    { name: "John Doe", age: 30 },
    { name: "Jane Smith", age: 25 },
    { name: "Alice Johnson", age: 28 },
]
let newArr = users.map(function(user) {
    return `<div>Name: ${user.name}, Age: ${user.age}</div>`
})
console.log(newArr);

// Grouping an array of objects by a specific property (e.g., grouping users by role.)
const users2 = [
    { name: "John Doe", role: "Developer" },
    { name: "Jane Smith", role: "Designer" },
    { name: "Alice Johnson", role: "Developer" },
    { name: "Bob Brown", role: "Manager" },
]
let obj = {}
users2.forEach(function(user) {
    if(obj[user.role]){
        obj[user.role].push(user);
    }
    else{
        obj[user.role] = [];
        obj[user.role].push(user);
    }
})
console.log(obj);

// Removing or updating a specific object in an array of data based on a unique ID.
const users3 = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Alice Johnson" },
]
let newArr3 = users.filter(function(user) {
    return user.id !== 2
})
console.log(newArr);
