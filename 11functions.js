function sayMyName() {
    // console.log("My name is Arpit")
}
sayMyName();
function addTwoNumbers(num1, num2) {
    let sum = num1 + num2;
}
let ans = addTwoNumbers(40, 80);
// console.log(ans);//undefined because we are not returning anything

function addTwoNumbers(num1, num2) {
    let sum = num1 + num2;
    return sum;
}
let answ = addTwoNumbers(40, 80);
// console.log(answ);//120

function loginUserMessage(userName) {
    if (!userName) {
        console.log("Please enter a userName")
        return
    }
    return `${userName} just logged in`
}
// console.log(loginUserMessage("Arpit"))
console.log(loginUserMessage(" "));//undefined
