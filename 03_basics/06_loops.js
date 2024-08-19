const arr=[1,2,3,4,5];

/*for of*/
for(const elem of arr)
        console.log(elem);

//using Maps

const map=new Map();
map.set('IN','India');
map.set('USA','United States Of America');
map.set('Fr','France');

for(const [key,value] of map)
        console.log(`Country Code:- ${key} and Country is:- ${value}`);

/*For in */

for(const elem in arr){
    //
}

//best for traversing objects
const myObj={
    username:"Pradeep",
    age:"23",
    gender:"Male"
};

for(const key in myObj)
    console.log(`${key} : ${myObj[key]}`);

/*forEach */
function printMe(elem,idx,arr){
    console.log(`${elem} | ${idx} | ${arr}`);
}

arr.forEach(printMe);

//or use anonymous function directly as the callback function
//arr.forEach((elem,idx,arr)=> ... )

/*filter */

console.log(arr.filter(elem=>elem>2));

/*reduce */

const newArr=arr.map(item=>item*20).reduce((acc,item)=>acc+item,299);
console.log(newArr);
