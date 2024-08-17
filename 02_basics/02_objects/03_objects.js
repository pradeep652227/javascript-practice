/*Destructuring of Objects*/

const course={
    name:"Namaste JS",
    price:"free",
    instructor:"Hitesh Choudhary"
};

const {instructor:courseInstructor,name:courseName}=course;

console.table([
    courseInstructor,courseName
]);

/*
JSON Structure
{
    "name":"fsdfsdf",
    "id":1311,
    "address":"asfdkljsldkfj"
}
*/