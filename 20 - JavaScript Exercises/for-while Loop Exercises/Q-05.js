/* Given two arrays of integers. Add up each element in the same position and
create a new array containing the sum of each pair. Assume both arrays are of the same length. */

let x = [10, 8, 5];
let y = [7, 3, 9];
let sum1 = 0;
let sum2 = 0;
let sum3 = 0;

for (let i = 0; i < 1; i++) {
    sum1 += x[0] + y[0]
    sum2 += x[1] + y[1]
    sum3 += x[2] + y[2]
}

let result = [sum1, sum2, sum3];
console.log(result);