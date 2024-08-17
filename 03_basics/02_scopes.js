
function fun1(){
    const username="Pradeep";
    
    //nested function, closure created
    function fun2(){
        const innerVar="test";
        console.log(`Nested Function accessing var of parent function= ${username}`);
    }
    // fun2();
    console.log(innerVar);
    fun2();
   
}

fun1();
//Means that inner function can use the variables or identifiers of outer function but reverse isn't true.
