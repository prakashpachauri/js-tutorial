// for in function is used on object in javascript 


const myobject={
    js :"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"Swift is made by apple", 
}
// for in loop used on object

for (const key in myobject) {
    // console.log(`${key} Shortcut is for ${myobject[key]}`)
   
}


// Array

const programming=["js","C++","ruby","python","Swift"]

for (const key in programming) {
//    console.log(programming[key])
}


//map operational for in is not working on map

const map= new Map()
map.set('In',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")

for (const key in map) {
    console.log(key);
    
}