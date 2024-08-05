/*
In JS, memory space is given to variables either in stack or heap memory.

Stack Memory is when we're declaring/using primitive datatypes.
That is, call by value

Heap Memory is when we're declaring/using Non-Primitive datatypes.
That is, call by reference
*/

let name1="Pradeep Gaur";
let name2=name1;
name2="Ramesh";

console.table([
    name1,
    name2
]);

let userOne={
    email:"abc@abc.com",
    phoneNo:"1234567890"
};

let userTwo=userOne;
userTwo.email="ps@gmail.com";

console.table([
    userOne.email,
    userTwo.email
]);