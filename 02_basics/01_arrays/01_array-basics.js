//unlike traditional arrays in programming languages, JS support array of different elements
let arr1=[1,2,true,"test"];
console.log(arr1);

//array can be initialiseda as an object
let arr2=new Array(1,2,true);

//commonly used methods of array
arr2.push(5);
arr2.pop();
arr2.unshift(9);//places 9 at the 0th index and shifts all the elements one index ahead
arr2.shift();//removes elem at 0th index and all the elems are shifted one index back

console.log(arr2);

console.table([
    arr2.includes(2),
    arr2.indexOf(2),
]);

let arr2String=arr2.join(' | ');//joins all the elems to a string, by default separated by a ','
console.log(arr2String);

//difference between .slice() and .splice()

arr2=[...arr2,2,3,5];
console.log(`Arr2 before slice ${arr2}`);
let arr2Slice=arr2.slice(0,2);
console.log(`Sliced array ${arr2Slice}`);
console.log(`Arr2 after slice ${arr2}`);

//.splice() modifies the original array
let arr2Splice=arr2.splice(0,2);
console.log(`Arr2 after splice ${arr2}`);
console.log(`Spliced array ${arr2Splice}`);

let arr=[1,2,3,4,5];
console.log(arr);
console.log(arr.splice(1,2,-1,-2,-3,-4));
console.log(arr);

