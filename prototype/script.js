function Prototype(){
    function Person(name, age){
        this.name = name;
        this.age = age;
    }
    Person.prototype.sayName = function(){
        console.log(`Helloo ${this.name}`)
    }
    let user = new Person("John", 8)
    user.sayName();
    console.log(user)
}

function Class(){
    class Person{
        constructor(name, age)
        {
            this.name = name;
            this.age = age;
        }
        sayName(){
            console.log(`Helloo ${this.name}`)
        }
    }
    let user = new Person("John", 8)
    user.sayName();
    console.log(user)
}

Class()
Prototype();