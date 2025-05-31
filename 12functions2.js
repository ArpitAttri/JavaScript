function calculatePrice(...num1) {//...rest operator/spread operator based on use case
    return num1;
}
console.log(calculatePrice(100, 200, 900, 700));//whole values

function calculatePrice(val1,val2,val3,...num1) {
    // return num1;//700
}

// Access object by function
const user = {
    name: "Arpit",
    price : 199
}
function handleObject(anyobject) {
    console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`);
}
//handleObject(user);
handleObject({
    username: "sam",
    price: 399
})
//we can also pass object directly in function

//Access Array by function
const myArray = [200, 900, 700, 800];
function returnSecondValue(getArray) {
    return getArray[1];
}
//console.log(returnSecondValue(myArray));//900
console.log(returnSecondValue([200, 400, 500, 1000]));//400 
// we can also pass array directly in function