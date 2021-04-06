// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1,0,3,100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

function biggestarray1(arr){
    let biggest=0;
    for(i=0; arr.length > i; i++){
        if(arr[i] > biggest){
            biggest = arr[i]
        }
    }
    return console.log(biggest)
}
biggestarray1(array);

function biggestarray2(arr){
    let highest=0;
    arr.map((item)=>{
        if(item > highest){
            highest=item
        }
    })
    return(console.log(highest))
}
biggestarray2(array2)

function biggestarray3(arr){
    let zero =0;
    for(item of arr){
        if(item > zero){
            zero = item
        }
    }
    return console.log(zero)
}
biggestarray3(array3)