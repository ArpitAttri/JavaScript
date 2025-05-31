const userEmail = "";
if (userEmail) {
    console.log("Logging in");
}
else {
    console.log("Please enter your email");
}


// False values
// 0, -0, "", null, undefined, NaN


//True Values
//"0", " ", [], {}, 'false', 1, -1, Infinity, -Infinity, function(){}


// How to check if array is empty
const arr = [];
if (arr.length === 0) {
    console.log("Array is Empty");
}


// How to check if object is empty
const obj = {};
if (Object.keys(obj).length === 0) {
    console.log("Object is Empty");
}


// Nullish Coalescing Operator (??): null or undefined
let val1 ;
val1 = 5 ?? 10; // if val1 is null or undefined it will take 10 , otherwise it will take 5
val1 = null ?? 10 // if val1 is null it will take 10, otherwise it will take null
val1 = undefined ?? 15// if val1 is undefined it will take 10, otherwise it will take undefined
console.log(val1);//15



// Terniary Operator
// condition ? true : false

const price = 90;
price >= 80 ? console.log('true') : console.log('false');