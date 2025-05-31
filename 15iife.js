//  Immediately Invoked Functiom Expression


// named function
(function chai() {// if we write a iiffe function just place the '(' before the start of the function and ')' after the end of the function
    console.log("DB connected");
})(); // always use ; at the end of the iife function and we use() to call the function



// unnamed function or simple function
(() => {
    console.log("DB two connected")
})();




// parameterized function
((name) => {
    console.log(`DB connected ${name}`)
})('Arpit');