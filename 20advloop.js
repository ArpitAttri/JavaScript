// for in loop

const myObj = {
    js: "JavaScript",
    cpp : "C++",
    Java : "java"
}
for (const i in myObj) {
    //console.log(`${i} is a shortcut of ${myobj[i]}`)
}//error because we don't use for in loop on an objects
    

const programming = ["js", "ruby", "python", "java"]
for (const i in programming) {
    //console.log(programming[i]);
}

const map = new Map();
map.set('IN', "India")
map.set('US', "United States of America")
map.set('UK', "United Kingdom")
for (const key in map) {
    //console.log(key);
}// not applicable for maps
for (const [key, Value] in map) {
    //console.log(key,':->', Value);
}