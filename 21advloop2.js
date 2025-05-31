// For Each Loop

const arr = ["js", "ruby", "python", "java"];
arr.forEach(function(val){
    //console.log(val);
})

arr.forEach((item) => {
    //console.log(item);
})

function printme(item) {
    //console.log(item);
}
arr.forEach(printme);

arr.forEach((item, index, arr) => {
    //console.log(item, index, arr);
})


const myCoding = [ 
    {
        languagename: "JavaScript",
        level: "Intermediate"
    },
    {
        languagename: "Python",
        level: "Beginner"
    },
    {
        languagename: "Java",
        level: "Advanced"
    },
]
myCoding.forEach((item) => {
    //console.log(item.languagename);
})
