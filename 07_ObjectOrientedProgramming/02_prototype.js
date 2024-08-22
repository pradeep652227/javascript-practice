/*1.)Prototypal Inheritance*/

function MulByFive(num){
    return num*5;
}
//using the concept of prototypal inheritance,
MulByFive.power=2;
// console.log(MulByFive.power);

//That is, functions/arrays/entities will work as per their definition but can also act as objects due to 
//prototypal inheritance

/*2.)Filling Prototype and use of 'this'*/
function createdUser(username,score){
    this.username=username;
    this.score=score;

    return this;
    //function:increment(){this.score=this.score+1;}
};

createdUser.prototype.increment=function(){
    this.score++;
}
createdUser.prototype.printMe=function(){
    console.log(`User is ${this.username} with score= ${this.score}`);
}

const user1=createdUser("Chai",25);
const user2=new createdUser("Tea",250);

//The 'new' keyword enables us to use custom functionalities of prototype object
//use1.printMe();
user2.printMe();

/*3.)Prototypal Inheritance*/

const User={
    name:"chai",
    email:"chai@chai.com"
};

const Teacher={
    makeVideo:true
};

const TeacherSupport={
    isAvailable:true
}

const TASupport={
    makeAssignment:'JS Assignment',
    __proto__:TeacherSupport
}

console.log(TASupport.isAvailable);
Teacher.__proto__=User;
console.log(Teacher.name);
