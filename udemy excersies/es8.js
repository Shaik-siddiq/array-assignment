// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = (turtle,rabbit)=>{
    console.log(rabbit);
    turtle=turtle.padStart(8)
    rabbit=rabbit.padStart(8)
    turtle.padEnd(9, '=');
    console.log(turtle);
    

} 
//'     ||<- Start line';
startLine('🐢','🐇');

console.log(startLine);

// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
/* var turtle ;

console.log(turtle);
 */
// #3) Get the below object to go from:
let obj = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }
  // to this:
  console.log(`my ${obj.my} is ${obj.is} the ${obj.the}`);

Object.keys(obj).map((value)=>{return console.log(value)})
Object.entries(obj).map((value)=>{return console.log(value.join(' '))}).join(' ')
Object.values(obj).map((value)=>{return console.log(value)})
