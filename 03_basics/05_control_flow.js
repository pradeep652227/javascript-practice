//Implicit control block chaining
if(5>2)
    console.log('yes'),
    console.log('again yes');

//falsy values in JS
//false , 0 , "",-0,Bigint 0n,null,undefined, NaN

//truthy values in JS (all the values other than falsy values)
//[],{},"0",'false',function(){}

//to check if any array is empty?
//arr.length===0?

//to check in an object is empty?
//Object.keys(obj).length===0?

//Nullish Coalescing Operator (for null and undefined values)

//what to do if my returned value is null or undefined
let api_res=5??10;
console.log(api_res);

api_res=null??10;
console.log(api_res);
api_res=undefined??10;
console.log(api_res);
