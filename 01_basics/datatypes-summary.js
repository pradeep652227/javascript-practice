//1.) Primitive types

//there are 7 primitive datatypes in javascript 
//They are call by value i.e. whenever they're passed to a function or assigned to a new item, a new copy is made
//String, Bool,Number,Null, undefined, Symbol (kisi bhi value ko unique banane ke liye use karte hain),Bigint

/*Examples of Primitive types*/
let userEmail;//undefined

let id=Symbol(123);
let anotherId=Symbol(123);
//although the input values are same but the return values are not.
console.log(anotherId);
console.log(id===anotherId);

const bigNumber=1231231232121n;
console.log(typeof bigNumber);
//here , n for bigint
//javascript will automatically conver such a large number into a bigint type

//2.) Reference Type (Non-Primitive)
//Memory ka reference direct milta hai
//Arrays, Objects, Functions

// JavaScript is a dynamically typed language. 
// This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. 
// You can assign different types of values to a variable during its lifetime.

//datatype of all the non primitive types is Object or object function  in case of functions