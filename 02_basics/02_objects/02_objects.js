/*Merging Of Objects*/

const obj1=new Object({1:'a',2:'b'});
const obj2={3:'a',4:'b'};

//const obj3={obj1,obj2};//wierd Mergin, not expected

const obj4=Object.assign({},obj1,obj2);

console.table([obj1,obj4]);

const obj4_1=Object.assign(obj1,obj2);

console.table([obj1,obj4]);

/*Array of keys, values, entries*/
console.table([
    Object.keys(obj4),
    Object.values(obj4),
    Object.entries(obj4)
]);

/*check if the property is that of the object or not present*/
console.table([
    obj4.hasOwnProperty(1),
    obj4.hasOwnProperty(5)
]);