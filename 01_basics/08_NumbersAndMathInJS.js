
//Implicit type checking
const score=100;

//Explicit Number defined
const balance=new Number(400);

const newNum=new Number(10000000);

console.log(newNum.toString);
console.log(newNum.toFixed(3));
const decimalNum=123.998;
console.log(newNum.toPrecision(
    8
));

console.log(newNum.toLocaleString());
console.log(newNum.toLocaleString('en-IN'));

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.EPSILON);
console.log(Number.isSafeInteger(5));
console.log(Number.isInteger(2.3));
console.log(Number.parseFloat("23"));


//Math in JS
console.table(
    [
        Math.abs(-4),
        Math.round(1.23),
        Math.sqrt(25),
        Math.pow(2,5),
        Math.min(3,45,2),
        Math.max(2,3,45),
        Math.floor(Math.random()*(Math.max(10,20)-Math.min(10,20)+1))+Math.min(10,20)
    ]
);