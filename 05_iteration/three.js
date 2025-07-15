// for(const iteration of object) for of loops

// ["","",""] array 
// [{},{},{}] object

const arr=[1,2,3,4,5]

// it is iteratable on the array 

for (const key of arr) {
    console.log(key);
    
}

const greetings="hello world!"

for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
    
}

// map 
// map is hold the key value pair at the time of insertion in javascript

const map= new Map()
map.set('In',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")

for (const [key,value] of map ) {
    console.log(key,":-",value)
    
}
// used for of loops on the object it is iteratable or not 

const myobject={
    game1:"NFS",
    game2:"Spiderman",
}


for (const [key,value] of myobject) {
    console.log(key,":-",value);
    
    
}