//To Number
let score=33;
let score1="33";
let score2="33abc";
let score3=undefined;
let score4=null;

let val1=Number(score1);
let val2=Number(score2);

/*
->Non-Numeric String to Number gives NaN
->undefined to Number gives NaN
->null to Number gives 0
*/
console.table([
    typeof score,
    typeof (val1),
    typeof(val2),
    typeof score3,
    typeof score4
])
console.table([
    score,
    val1,
    val2,
    Number(score3),
    Number(score4)
]);

// //To Boolean
// let isLoggedIn=1
// console.table([
//     Boolean(isLoggedIn),
//     Boolean(0),
//     Boolean("1"),
//     Boolean("0"),
//     Boolean(""),
//     Boolean("abc"),
//     Boolean(245),
//     Boolean("123"),
//     Boolean(null),
//     Boolean(undefined)
// ])
/*Anything other than 0 , "0" , undefined, and null , will convert to true during boolean conversion*/

//To String
let val=3;
console.log(-val);

console.log(2**2);

console.log (-false);

//Link:- https://www.w3schools.com/js/js_precedence.asp