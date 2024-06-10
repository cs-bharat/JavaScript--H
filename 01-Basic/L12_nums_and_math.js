const score = 100
// console.log(score);

const balance = new Number(100)
// [number:100] // return prototype
// console.log(balance); 

// console.log(balance.toString());
// console.log(balance.toString().length);

const otherNumber  = 123.897
console.log(otherNumber.toPrecision(3)); // 124 

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); // 10,00,000


// ++++++++++++++++++++++ math ++++++++++++++++++++++++++++++++++ //

console.log(Math); // object
console.log(Math.abs(-8.88)); // negative to positive 
console.log(Math.round(8.9)); // ceil,floor

console.log(Math.pow(2,4));

console.log( (Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // 10 to 20 range
