const descriptor=Object.getOwnPropertyDescriptor(Math,'PI');
console.log(descriptor);//non editable

const User={
    username:"Pradeep Gaur",
    score:90,
    isAvailable:true
}

Object.defineProperty(User,'score',{
    writable:false,
    enumerable:false
});

Object.defineProperty(User,'username',{
    writable:false
});

for(let [key,value] of Object.entries(User)){
    if(typeof key !== 'function')
    console.log(`${key} : ${value}`);
}

User.score=100;
User.username='SOmefofms';
console.log(User);