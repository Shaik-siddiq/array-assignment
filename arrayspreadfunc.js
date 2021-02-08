// array spread operator in function
function spreadoperator(x,y,z) {
    return x + y + z;
}
let result = [16,43,58];
let sum = [12,16,22];
console.log(spreadoperator(...sum));
console.log(spreadoperator(...result));
