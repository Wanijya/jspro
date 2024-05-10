// Prototypal Inheritance :-

function makeHuman(name, age){
    this.name = name;
    this.age = age;
}
makeHuman.prototype.printMyName = function(){
    console.log(this.name);
}

const human1 = new makeHuman("Wani", 21);
const human2 = new makeHuman("Aaru", 19);