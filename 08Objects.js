//Object Literals

// objects are a collection of key value Pairs
const mysym = Symbol("Key1");// creating a symbol


const JsUser = {
    name: "Arpit",
    age: 22,
    [mysym]: "myKey1", // we acn use symbol as a key
    "full Name" : "Arpit Attri",// we access this using JsUser["full Name"]
    location: "Himachal Pradesh",
    email: "arpit@google.com",
    isloggedIn: true,
    lastLoginDays:["Monday","Saturday"]
}
//console.log(JsUser);
//console.log(JsUser.email);
//console.log(JsUser["email"]);
//console.log(JsUser["full Name"]);
//console.log(JsUser[mysym]);
//console.log(JsUser);

JsUser.email = "arpit@microsoft.com"// to update the email
//console.log(JsUser.email);

//Object.freeze(JsUser)// to freeze the object that we cannot change the values of JsUser

JsUser.greeting = function() {
    console.log("Hello Js User");
}
JsUser.greetingtwo = function () {
    console.log(`Hello Js User, ${this.name}`);
    console
}
console.log(JsUser.greetingtwo());
console.log(JsUser.greeting());
