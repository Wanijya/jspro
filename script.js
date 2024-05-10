// This ki value alg alg condition me...

//global - Window
console.log(this);

// Function - Window
function abcd(){
    console.log(this);
}
abcd();

// Method - object
var obj = {
    name: function(){ // this is a method.
        console.log(this);
    }
}
obj.name();

// function inside method (es5) - windows
var obj2 = {
    sayName: function(){   // ye ek method hai.
        console.log(this.age);
        function childfnc(){
            console.log(this);
        }
        childfnc();
    },
    age: 25,
} 
obj2.sayName();

// function inside method (es6) - objects
var obj3 = {
    sayName: function() {   // ye ek method hai.
        const chlid = () =>{
            console.log(this)
        }
    },
}
obj3.sayName();

//Constructor function - new blank object
function add(){
    console.log(this);
} 
const ans = new add();

//event Listener - that element jispar event lis. laga ho
document.querySelector("button")
.addEventListener("click", function(){
    console.log(this);
})