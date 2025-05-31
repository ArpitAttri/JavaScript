// ............... This Keyword ................

// const user = {
//     username: "Arpit",
//     price: 999,

//     welcomeMessage: function() {
//         console.log(`${this.username}, welcome to this website`);
//         console.log(this);
//     }
    
// }

//user.welcomeMessage();
//console.log(this); // empty object

// function chai() {
//     let username = "Arpit"
//     console.log(this.username);//undefined
// }
// chai();


// const chai = function() {
//     let username = "Arpit"
//     console.log(this.username);//undefined
// }
// chai();


// ^^^^^^^^^^^^^^^^^^ Arrow function ^^^^^^^^^^^^^^^


// const chai = () => {
//     let username = "Arpit"
//     console.log(this.username);//undefined
// }
// chai();



// const addTwo = (num1,num2) => {  // if we use curely braces then we must have to use return keyword
//     return num1 + num2;
// }
// console.log(addTwo(4, 7));


// const addTwo = (num1, num2) => (num1 + num2);// if we uses () then we dont need to write return keyword
// console.log(addTwo(9, 7));

const addTwo = (num1, num2) => ({username: "Arpit"})


console.log(addTwo(3, 4))
