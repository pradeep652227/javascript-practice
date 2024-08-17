
const mySymb=Symbol("key-1");

const myObj={
    name:"test-name",
    "age":30,
    isStud:false,
    greet:function(){return 123},
    specs:{
        range:300,
        topSpeed:180
    },
    [mySymb]:"test-symbol"
}

console.table([
    myObj.greet(),
    typeof myObj[mySymb],
myObj["mySymb"]
]);

//lock the object
Object.freeze(myObj);
myObj.name="name-changed"