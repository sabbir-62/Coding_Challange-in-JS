

// Find largest number
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(Math.max(...arr));

// 2nd largest Number

let sortedArray = arr.sort((a,b) => b-a);
console.log(sortedArray[1])