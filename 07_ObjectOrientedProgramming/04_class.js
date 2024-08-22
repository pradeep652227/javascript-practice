class User{
    static count=0;
    constructor(username='',email='',password=''){
        this.username=username;
        this.email=email;
        this.password=password;
        User.count++;
    }
}

class Teacher extends User{
    constructor(username='Jessy',email='',password='',position=''){
        super(username,email,password);
        this.position=position;
    }

    addCourse(){
        console.log(`A New Course is about to be added by ${this.username}`);
    }
}
const user1=new User();
const user2=new User();

const teacher1=new Teacher();
teacher1.addCourse();
console.log(User.count);

//comparing two instances
console.log(teacher1 instanceof User);