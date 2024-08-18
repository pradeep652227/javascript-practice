//Immediately invoked function expressions
//best to use when a function is needed only one-time call
//and when it should be executed immediately after the definition

(function (){
    console.log('Call to Backend');
})();

(async (dbUrl)=>{
    console.log(`Connection to DB Estd with string ${dbUrl}`);
    return 1;
})('123123sdfccc');

