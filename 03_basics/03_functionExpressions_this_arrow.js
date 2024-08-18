//'this' keyword gives you the reference to the current context

const user = {
    username: "Pradeep",
    welcomeMessage: function () {
        console.log(`Hello ${this.username}`);
        console.log(this)
    },
};

user.welcomeMessage();
user.username="Name Changed";
user.welcomeMessage();

//IN browser, this in global context gives you the reference to the window object but in environments
//like Node, bun , it gives you an empty object that's why you can't use window object in 
//server side rendering

/*this with functions*/
function chaiAurCode(name){
    console.log(this);
}

chaiAurCode("Pradeep");

//this with ()=> functions
const chaiAndCode=(name)=>{
    console.log(this);
    console.log(this.name);//undefined
}

chaiAndCode("Pradeep");

//Implicit Return and Explicit Return with arrow functions
const addTwo=(num1,num2)=>num1+num2;
const addTwo_=(num1,num2)=>(num1+num2);
const addTwo__=(num1,num2)=>{num1+num2};//will return nothing, no implicit return with {}
const addTwo___=(num1,num2)=>({totalValue:num1+num2});//Object is returned implicitly
