const accountId=12345;
var userEmail="ps123@gmail.com"
let userPassword="123123";
accountCity="Jaipur";

//const means that variable is not assignable again
//let and var has the difference of scope - block and functional scope
//variable without any datatype, ---- not recommended. Not Same as Var because it can not be accessed
//before initialization


var userEmail='123';
//var variable shadowed the previous userEmail

console.table([accountId,userEmail,userPassword,accountCity]);
