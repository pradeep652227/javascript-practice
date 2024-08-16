/*merging in arrays*/

let arr=[1,2,3];
let arr1=[4,5];
// arr.push(arr1);
// console.log(arr);//not as expected

//solution
console.log(arr.concat(arr1));

//better solution
console.log([...arr,...arr1]);

/*Flatening of nested arrays*/

let nestedArr=[1,2,3,[4,5],6,7,[1,2,[3,4]]];

console.log(nestedArr.flat(5));//or use Infinity as depth value and let JS decide when to stop

/*Checking isArray and Converting to Array*/

console.table([
    Array.isArray([1]),
    Array.from("12"),
    Array.from({name:"Pradeep"})
]);

console.log(Array.of(1,2,3));

console.log(nestedArr.at(20));

