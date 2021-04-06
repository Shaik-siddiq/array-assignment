// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
console.log(dragons.includes('John'));
console.log(dragons);
 console.log(dragons.filter((name)=>{ return name.includes('John')}));

//#3) Create a function that calulates the power of 100 of a number entered as a parameter
const power = (x) => x**100
console.log(power(2));

// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result
console.log(power(10000));
