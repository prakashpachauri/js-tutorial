const Descripter=Object.getOwnPropertyDescriptor(Math,"PI")
console.log(Descripter);


// console.log(Math.PI)
// Math.PI=5
// console.log(Math.PI)

const chai={
    name:"Ginger Chai",
    Price:"250",
    isAvailable:true,

    orderbook: function(){
        console.log("chai nahi bani")
    }
}

// console.log(chai)
console.log(Object.getOwnPropertyDescriptor(chai,'name'));
Object.defineProperty(chai,'name',{
    // writable:false,
    enumerable:true,
//     // configurable:false,

})

console.log(Object.getOwnPropertyDescriptor(chai,'name'));


for (let [key,value] of Object.entries(chai)) {
    if (typeof value!=='function'){
        
        console.log(`${key}: ${value}`);
    }
    
    
    
}


