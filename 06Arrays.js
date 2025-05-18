const myarr = [1, 2, 3, 4, 5]
const myHeores = ["Ironman", "Thor"]
const myArr2 = new Array(1, 2, 3, 4, 5)
console.log(myarr);
myarr.push(6);
myarr.push(7);
myarr.pop();
console.log(myarr);
myarr.unshift(9); // It adds the element at the begining
myarr.shift(); //It removes the first element
console.log(myarr);

console.log(myarr.includes(6));
console.log(myarr.indexOf(3));

const newarr = myarr.join() // It converts the array into a string
console.log(newarr);

// slice, splice
const myn1 = myarr.slice(1, 3);//It returns the element form the given index
console.log(myn1);

// splice
console.log("b", myarr);
const myn2 = myarr.splice(1, 3);
console.log("c", myarr);
console.log(myn2);