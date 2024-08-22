// /*1.)Why use this keyword?*/

// /*As per Execution Context, functions with E.C will be different and separate. 
// Then, how will the current function know which 'username' is this (if 'this' was not used)?
// It will give you the reference of correct context where it is defined*/

// function greeting(){
//         console.log(`Hello ${this.username}. May you have a good day!!`);
//         console.log(this);
//         return 123;
// }
// const user={
//     username:"Pradeep",
//     password:"123",
//     // greeting:function(){
//     //     console.log(`Hello ${this.username}. May you have a good day!!`);
//     //     console.log(this);
//     //     return 123;
//     // },
//     greeting:greeting
// };

// console.log(user.greeting());

/*2.)Using 'new' keyword to create new instances*/

//function is also an object as per JS's prototypal inheritance
function User(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    // return this;
    //will implicitly return 'this' if 'new' keyword is used during object instantiation
};

//if 'new' is not used, then implicitly return this will refer to the global object and the properties will be bind to
//the global object
// const user1=User("Pradeep",2,true);
// const user2=User("Hitesh",4,true);
// console.log(user1);
// console.log(user2);

const user1=new User("Pradeep",2,true);
const user2=new User("Hitesh",4,true);
console.log(user1);
console.log(user2);

//calling the constructor
// console.log(user1.constructor());



