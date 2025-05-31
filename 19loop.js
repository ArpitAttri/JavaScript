const arr = [1, 2, 3, 4,]
for (const i of arr) {
   // console.log(i);
}

const greetings = "Helloe World!";
for (const greet of greetings) {
    //console.log(greet);
}

// Maps

const map = new Map();
map.set('IN', "India")
map.set('US', "United States of America")
map.set('UK', "United Kingdom")
for (const key of map) {
    //console.log(key);
}
for (const [key, Value] of map) {
    //console.log(key,':->', Value);
}

// Objects

const myObj = {
    game1: "Cricket",
    game2: "Football"
}
for (const [key, Value] of myObject) {
    // console.log(key, ':->', Value); 
} // error because we don't use for of loop on an objects
