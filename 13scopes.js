if (true) {
    let a = 3;
    const b = 6;
    var c = 7; // thats why we dont use var
}
//console.log(a)// ReferenceError: a is not defined
//console.log(b)// ReferenceError: b is not defined
//console.log(c)// 7
//let and const are block scoped

//Nested Scopes
function one(){
    const name = "Arpit";
    function two() {
        const website = "youtube"
        //console.log(name);//the child function can access the parent function but the parent function cannot access the child function
    }
    two();
}
one();

if (true) {
    const userName = "Arpit";
    if (userName === "Arpit") {
        const web = "youtube";
        //console.log(web + " " + userName);
    }
}

// +++++++++++++  interseting ++++++++++++++

function addone(num) {
    return num + 1;
}
console.log(addone(6));

function addtwo(num) {
    return num + 2;
}
console.log(addtwo(6));


