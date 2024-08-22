function createOrder(cart){
    const pr=new Promise((resolve,reject)=>{
        //create order
        //update cart
        //if(!validateCart(cart))
        // let validateCart=false;
        let validateCart=true;
        if(!validateCart){
            const err=new Error('Cart is not valid');
            reject(err);
            //filling the reject part of promise
        }else{
            const orderId=undefined;
            //orderId=dbCall;
            if(orderId)
                resolve(orderId);
            else
                resolve(-1);
        }
    });
    return pr;
}

createOrder(5).then(res=>{
    console.log(res);
})
.catch(err=>console.log(err));

//2nd example
const pr1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=false;
        if(!error){
            resolve({username:"Pradeep",password:"123"});
        }
        else{
            reject('ERROR: Something Went Wrong');
        }
    },5000);
})

let data;
pr1.then(res=>{console.log(res); data=res;})
    .catch(err=>console.log(err));

    console.log(`Returned Data is ${data}`);//for correct data value to be displayed add this statement in a async code.
    console.log('Doing some other work');
    console.log('Doing some other work');
    console.log('Doing some other work');
    console.log('Doing some other work');
    console.log('Doing some other work');