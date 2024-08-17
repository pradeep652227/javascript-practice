/*Arguments and Parameters*/

function greetUser(username){//Parameters
    console.log(`Hello ${username}!!`);
}

greetUser("Pradeep");//Arguments
greetUser();//username will have undefined, not passing anything

/*A Function that accepts n-parameters*/

function getBalance(...num1){
    console.log(num1);
}

function getBalance1(val1,val2,...num1){//using REST Operator
    console.log(num1);
}

getBalance(100,200,400,500);
getBalance1(100,200,400,500);
