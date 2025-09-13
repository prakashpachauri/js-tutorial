let mydate = new Date()
// console.log(mydate);
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.getTime());



// const mynewdate= new Date(2023,1,14)
// const mynewdate= new Date(2023,1,14,5,45)
let mynewdate= new Date("2023-1-14")
// const mynewdate= new Date("1-14-2025")




// console.log(mynewdate.toDateString());
// console.log(mynewdate.toLocaleString());

let timestamp=Date.now()
// console.log(timestamp.getDate());
// console.log(timestamp.toDateString());
// console.log(timestamp.toLocaleDateString());
// console.log(timestamp.getTime());
// console.log(Math.floor(Date.now()/1000));

let newdate =new Date()


console.log(newdate);
console.log(newdate.toLocaleDateString());
console.log(newdate.getMonth()+1);
console.log(newdate.getDay());

`${newdate.getDate()}and the time`
console.log(newdate.toLocaleString('default',{
     weekday:"long",
}));
