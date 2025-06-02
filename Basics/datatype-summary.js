// Primitive Data types
// 7 types of data types
// String , Number, null, bolean,undefined,BigInt
let score=100
let scorevalue=100.3
const isloggedIn=false
const outsidetemp=null
let usermail=undefined

let id=Symbol('123')
let anotherid=Symbol('123')
console.log(id==anotherid);

let BigInt=1452452145632145621456214521458624524856321453214563n
console.log(BigInt);

const hero=["Shatiman","Ironman","Batman"];

let myobj= {
    name:"Prakash",
    age:24,
}
console.log(myobj);





// Non Primitive Data types
// Array, object function, 

let myFunction=function(){
    console.log("Helloworld");
}

console.log(typeof null);
console.log(typeof outsidetemp);
console.log(typeof isloggedIn);
console.log(typeof myFunction);

console.log(typeof anotherid)
console.log(typeof id)