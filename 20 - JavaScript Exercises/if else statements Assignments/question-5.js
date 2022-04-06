// Assign 2 numbers and Find the largest of two number?
let numOne = 10;
let numTwo = 9;

// Solution No.01

if (numOne > numTwo) {
    console.log ("Yes, It's the largest Number")
} else if (numOne < numTwo) {
    console.log("It's the smallest Number")
}

// Solution No.02

let num = Math.max(numOne, Math.max(numTwo));
console.log(num);

// Solution No.03

let max = numOne;
if (numTwo > max) {
    console.log(max = numTwo)
} else if (max = numTwo) {
    console.log(max = numOne)
}