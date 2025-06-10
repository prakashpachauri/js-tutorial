// function is a keyword that define a function name and it declare the funtionname .

function saymyname(){

    // function defination in this section 
    // console.log("H");
    // console.log("I");
    // console.log("T");
    // console.log("E");
    // console.log("S");
    // console.log("H");
}

// Call the function saymyname()
// saymyname is a reference and () it is a execution symbol.
// how to print the function definition

// saymyname()


// we create a add two number function addtwonumber

// function addtwonumber(number1, number2){
//    console.log(number1+number2);
// }


// addtwonumber(3,5)

// we apply another method in the function


// function addtwonumber(number1, number2){
//    let  result=(number1+number2);
//    return result
// }

// const result=((addtwonumber(3,5)))
// console.log(result);


// create a loginuser() function 

// function loginuser(username="sam"){
//     if (!username){
//         console.log("Please enter the correct username");
//         return
//     }

    // console.log( username,"just logged in")

    // return `${username}, justlogged in`
// }

// console.log(loginuser());
// console.log(loginuser("Prakash"));


// create a object 
// ... rest operator we solve the problem of one value initialzation and by the help of rest operator 
// it solve the multiple value initialization and it intailize th e value into an array

function calculatecartprice(...num1){
    return num1

}

console.log(calculatecartprice(200,400,500,2000));


// user object 

const user={
    username:"Prakash",
    price:19
}


// objecthandling to handle the user object

function handleobject(anyobject){
   console.log( `user is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleobject(user)

// direct object provide to the handle object and it provide the value

handleobject({
    username:"Piyush",
    price:145
})


// create a new Array and find the value from the array on the behalf of getArray[2] with array indexing
const MynewArray=[100,200,300,400,500]


function returnthevalue(getArray){
    // get array is fetch the value according to the index funtion
    return getArray[2]
}

// console.log(returnthevalue(MynewArray));

console.log(returnthevalue([90,60,50,110,120,130]));




