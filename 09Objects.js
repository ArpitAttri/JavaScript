//const tinderUser = new Object();
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false
//console.log(tinderUser);

const regularUser= {
    email: "sam@google.com",
    fullname: {
        userfullname: {
            firstName: "Sam",
            lastName: "Smith"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstName);
// console.log(regularUser.fullname.userfullname.lastName);
const obj1 = { 1: "a", 2: "b", 3: "c" }
const obj2 = { 4: "d", 5: "e", 6: "f" }
// const obj3 = Object.assign({}, obj1, obj2);
// this will merge two objects
// console.log(obj3);

const obj3 = { ...obj1, ...obj2 };
// another method to merge two objects using spread operator
console.log(obj3);