const user={
    username:"PENNY",
    WelcomeMessage: function(){
   console.log(  `${this.username}, "Welcome to the website"` );
   // this keyword is used for current context or value in the program
   console.log(this);
   
   
    }
}

// user.WelcomeMessage()
// user.username="Piyush"
// user.WelcomeMessage() 
// console.log(this);

// function chai(){
//     username:"mohit"
//     console.log(this);
    
// }

// chai()


// create a variable and declare the function



// const chai= function (){
//     let username="hitesh"
//     console.log(this);
    
// }
// chai()


// create a arrow function using =>
const chai= ()=>{
    let username="hitesh"
    // console.log(this);   // it shows empty curly bracket in the output{}
    
}
// chai()



// const add=(num1,num2)=>{
//     return num1+num2

// }



// const add=(num1,num2)=> num1+num2
// const add=(num1,num2)=> (num1+num2)
    const add=(num1,num2)=> ({username:"Prakash"})




console.log(add(15,8));



// const mynewarray=[2,5,8,16,18,20]
// // arrow function
// mynewarray.forEach( ()=>{})
