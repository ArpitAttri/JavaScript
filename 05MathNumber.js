
const score = 300;
console.log(score);
const balance = new Number(400);
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));
const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(4));
const hunderds = 10000000;
console.log(hunderds.toLocaleString('en-IN'));

// Maths
console.log(Math);
console.log(Math.abs(-5));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(9, 7, 5, 2));
console.log(Math.max(8, 7, 9, 0));

console.log(Math.random());
console.log(Math.random() * 10);
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);