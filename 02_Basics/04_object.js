// const tinderUser= new Object()  // this object is created with the constructor
// it is a Singleton object in javascript

// non singleton object 

// declare the object and intialize the key and value in the object
const tinderUser = {}
tinderUser.id ="123ab"
tinderUser.name ="Prakash Pachauri"
// tinderUser.email ="prakash@gmail.com"
tinderUser.isloggedIn =false
// console.log(tinderUser);



// nested object :- it is a form of  object and in one object contain many object in the js
const regularUser={
   userdetail: {
        userfulname: {
            firstname:"Prakash",
            lastname:"Pachauri",
        }
        
    }
}



// how to print the nested object in the javascript

console.log(regularUser.userdetail.userfulname.firstname);



// declare the object and intializes the object key and value

const obj1={ 1:"a", 2:"b"}
const obj2={ 3:"a", 4:"b"}
const obj4={ 5:"a", 6:"b"}



// how to print the combine of the key and value

// const obj4={obj1,obj2}
// object.assign :- it is used for printing the combine and add the many object key value in the one object it solve the problem of printing
const obj3=Object.assign({},obj1,obj2,obj4)
console.log(obj3);
console.log(obj1);




// how to declare the array and intialize the key and value in the array array is represent the [] 

const user=[
    {
        id:1,
        email:"prakashpachauri3128@gmail.com"

    },
    {
        id:1,
        email:"prakashpachauri3128@gmail.com"


    },
    {
        id:1,
        email:"prakashpachauri3128@gmail.com"

    },
]




// how to print the array with the help of indexing method and .email

console.log(user[1].email)

// console.log(tinderUser);

// how to print the key of the object


// console.log(Object.keys(tinderUser));

// how to print the value of object.values(tinderUser)


// console.log(Object.values(tinderUser));

// how to retreive the data from the object


// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty('isloggedIn'));

