// print 1-6 random number for ludu game

// Solution 1
// const randomNumber = () => {
//     console.log(Math.floor(Math.random() * 6) + 1);
// }
// randomNumber();

// Solution 2
const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomNumber(1, 6));