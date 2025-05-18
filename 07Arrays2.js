const marvel_heros = ["thor", "ironamn", "hulk"]
const dc_heros = ["batman", "superman", "wonderwoman"]
const allheros = marvel_heros.concat(dc_heros)//to add two arrays
console.log(allheros);
const all_heros = [...marvel_heros, ...dc_heros];//to add two arrays by using spread operator
console.log(all_heros);

const another_array = [1, 2, 3, [3, 4,], 5, 6, [6, 7, 7]]
const realarray = another_array.flat(3); // to flatten the arrays means it converts the multiple arrays into single array
console.log(realarray);

console.log(Array.isArray("Arpit"));// to check whether the given value is a Array or not
console.log(Array.from("Arpit"));// to convert the string into array
console.log(Array.from({ name: "Arpit" }))// to convert the objevt into array

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));//to convert the elements into array