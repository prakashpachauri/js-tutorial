// strington
// object.create
// object literals

// create a symbol mysym symbol
const mysym= Symbol("key1")

// how to create a object in js


const jsuser={
    name:"PrakashPachauri",

    "name":"prakash",
    age:18,
    [mysym]:"key1",
    location:"Vrindavaan",
    email: "prakashpachauri3128@gmail.com",
    isloggedIn:false,
    lastloginday:["Monday","Saturday"],
}


// how to access key and value from the object in javascript
console.log(jsuser.name);
console.log(jsuser["name"]);
console.log(jsuser.email);
console.log(jsuser["email"]);
console.log(jsuser);
console.log(jsuser["mysym"]);
console.log(typeof jsuser.mysym);


// update the email in the object


// jsuser.email="prakashpachauri3233@gmail.com"

// object.freeze(jsuser)  function is used for freeze the object and it is not changable and modify in any object
 //Object.freeze(jsuser);
// jsuser.email="pp@gmail.com"
// console.log(jsuser.email)


// how to create a function and how to use it 

// how to declare the funtion with object

jsuser.greeting = function(){
    console.log("helloworld");
}
jsuser.greetingtwo = function(){
    console.log(`hello js user,${this.name}`);
}


// how to call the function

console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());
