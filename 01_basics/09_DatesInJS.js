// //Dates in Javascript

let myDate=new Date();
console.table([
    myDate,
    myDate.toString(),
    myDate.toDateString(),
    myDate.toISOString(),
    myDate.toJSON(),
    myDate.toLocaleString(),
    myDate.toLocaleDateString(),
    myDate.toLocaleTimeString()
]);

//.getXXX() methods
let myDate1=new Date("12-04-2022 04:12:23 AM");
console.log(myDate1);
console.table([
    myDate1.getTime(),
    myDate1.toLocaleString(),
    myDate1.getDay(),
    myDate1.getMonth(),
    myDate1.getDate(),
    myDate1.getFullYear(),
    myDate1.getMilliseconds(),
    myDate1.getSeconds(),
    myDate1.getMinutes(),
    myDate1.getHours(),
    myDate1.getUTCDate()
]);

//toLocaleString options
console.log(new Date().toLocaleString('default',{
        day:"numeric",
        weekday:"long",
        month:"long",
        year:"numeric",
}))
