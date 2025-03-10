const prompt = require('prompt-sync')();

const number = prompt('Enter the number: ').split(' ').map(Number)
const position = Number(prompt('Enter the position: '));
const value = Number(prompt('Enter the value: '));

console.log('Before:', number);

// Shifting elements to the right
for (let i = number.length; i > position - 1; i--) {
    number[i] = number[i - 1]; // Shift elements right
}

// Insert the new value at the specified position
number[position] = value;

console.log('After:', number);
