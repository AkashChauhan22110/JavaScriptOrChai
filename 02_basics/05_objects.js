//Destructuring

const course = {
  courseName:"Js in Hindi",
  price:"10$",
  courseInstructor:"Akash"
}
const {courseInstructor: instructor} = course;
console.log(instructor);//Akash 