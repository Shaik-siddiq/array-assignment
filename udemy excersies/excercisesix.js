
var array = ["Banana", "Apples", "Oranges", "Blueberries"];

array.shift(0);
console.log(array);// 1. Remove the Banana from the array.
console.log(array.sort())//2. Sort the array in order.
array.push('kiwi')//3. Put "Kiwi" at the end of the array.
console.log(array)
console.log(array.shift(0))//Remove "Apples" from the array.
console.log(array)
array.reverse(array)
// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])
console.log(array)
var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(array2[1][1][0]);// access "Oranges".