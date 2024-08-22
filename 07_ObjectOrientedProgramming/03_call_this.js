function setUsername(username){
    this.username=username;
    console.log(this);
}

console.log(new setUsername('username'));
console.log(setUsername('username'));

//sending the reference of current function to the called function so that the properties will be 
//bind to this 'this' not to that of global object
//not to that of global object
function createUser(username,email,password){
    setUsername.call(this,username);
    this.email=email;
    this.password=password;

    console.log(this);
    return this;
}

const user1=new createUser("Pradeep","abc@abc.com","123");

console.log(user1);