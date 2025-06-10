
// var c=300
let a=100

if(true){
    // block scope 
    let a=10
    console.log("Inner block a :",a)

    const b=20
    var c=30
}

console.log("outer from the block",a);
// console.log(b);

// var c is print from the block scope
console.log(c);


for (let i = 0;i < array.length;i++) {
    const element = array[i];
    
}