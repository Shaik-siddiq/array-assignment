//Evaluate these:
//#1

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { a: 5}; 
object1.a = 4;


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 
class animal {
    constructor(name,type,color){
        this.name = name;
        this.type = type;
        this.color = color;
    }
   
}
class Mamal extends animal{
    constructor(name,type,color,eat){
        super(name,type,color)
        this.eat = eat;
    }
    sound(){
        console.log(`hi i am ${this.name} my type is ${this.type} and my color is ${this.color}`)
    }
    eating(){
        console.log(`i eats ${this.eat} my type is ${this.type} is sacred in india`)
    }
}

const mamal = new Mamal("moo","cow","white","grass");
mamal.sound();
mamal.eating();
let stringify = JSON.parse(JSON.stringify(mamal));
console.log(stringify);