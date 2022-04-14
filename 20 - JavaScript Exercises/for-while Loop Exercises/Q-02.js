let array_01 = [2, 8, 10, 25, 99, 140];
let array_02 = [17, 19, 22, 12, 9, 20];
let sum_01 = 0;
let sum_02 = 0;

// First print sum of each array then print sum of array_01 and array_02

for (let i = 0; i < array_01.length; i++) {
    sum_01 += array_01[i];
}

console.log(sum_01); // 284

for (let i = 0; i < array_02.length; i++) {
    sum_02 += array_02[i]
}

console.log(sum_02); // 99

let result = sum_01 + sum_02;
console.log(result); // 383
