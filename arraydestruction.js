// Array Destruction in javascript
let places = ['nandyal','kurnool'];
[newplaces, ...places] = ['banaganapalli','alagadda','sirivella','nandyal','kurnool'];
console.log(places);
let oldplaces;
[oldplaces, ...places] = [...places,'hyderabad','ballari','oldcity'];
console.log(places);
console.log(newplaces);
console.log(oldplaces);

let sid = ['i', 'am','UI','developer',55,43,66];
[me,what,are,you]=sid;
console.log(me);
console.log(what);
console.log(are,you);

//object in array destructring

let employee =[
   {name:'siddiq',
    destination:'ReactJs devloper',
    company:'greet labs'
    },
    {name2:'imran',
    destination:'Angular devloper',
    company:'cat labs'
    },
    {
    name3:'sha',
    destination:'NodeJs devloper',
    company:'great lakes'
    }
]

console.log(employee[0]);
let [{name}] = employee;
let[,{name2}] = employee;
let[,,{name3}] = employee;
let[,{destination}] = employee;
console.log(destination);
console.log(name);
console.log(name2);
console.log(name3);