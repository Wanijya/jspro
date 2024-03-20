// var obj = {
//     fName: "John",
// }
// var obj2= {
//     lName : "Smith",
// }
// obj2.__proto__ = obj;
// console.log(obj2);

// Proto ek object hai jo ki apne refrensa ko seach krta hai

var obj = {
    fName: "John",
}
obj2 = Object.create(obj);
obj2.lName = "Smith";
console.log(obj2) 

// __proto__ -> [[Prototype]]
// prototype this is a different thing...