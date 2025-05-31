const course ={
    coursename :"Javascript",
    price: "999",
    courseinstructor:"hitesh"
}
// object destructure
const { coursename } = course
const{coursename: name} = course
console.log(coursename); 
console.log(name);