
// var c=300
let a=100

if(true){
    // block scope 
    let a=10
    // console.log("Inner block a :",a)

    const b=20
    var c=30
}

// console.log("outer from the block",a);
// console.log(b);

// var c is print from the block scope
// console.log(c);


// creating a nested funtion to check the scope
// child can access the property of parent class
//but parent function can't access child function property in this nested funtion


function one(){
    const username="Prakash"
    function two(){
        const website="youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}

one()

// creating a nested if and function


if(true){
    const username="Mohan"

    if(username==="Mohan"){
        const website="  is available on the website Sarkariresult"

        // it can access from the first global 
        
        console.log(username);
        console.log(username+ website);
    }
    // console.log(website)
}
// console.log(username);



// ++++++++++++++++++++++++++++++++++++++++++++++++++ Interesting ++++++++++++++++++////////////////////////////////////////
// it is a funtion and it is run on the time as which you want to place the execution line

console.log(addone(5));


function addone(num){
    return num+1
}




// first declare the variable and after below you and write a execution line and you place the above execution line it shows the error in the program

// it run because it is execute before the declartion

const addtwo=function addtwo(num){
    return num+2
    
}
console.log(addtwo(11));

