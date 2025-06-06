// const tinderUser= new Object()  
// it is a Singleton object in javascript
const tinderUser = {}
tinderUser.id ="123ab"
tinderUser.name ="Prakash Pachauri"
// tinderUser.email ="prakash@gmail.com"
tinderUser.isloggedIn =false
// console.log(tinderUser);

const regularUser={
   userdetail: {
        userfulname: {
            firstname:"Prakash",
            lastname:"Pachauri",
        }
        
    }
}

console.log(regularUser.userdetail.userfulname.firstname);

const obj1={ 1:"a", 2:"b"}
const obj2={ 3:"a", 4:"b"}
const obj4={ 5:"a", 6:"b"}

// const obj4={obj1,obj2}
const obj3=Object.assign({},obj1,obj2,obj4)
console.log(obj3);
console.log(obj1);


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

console.log(user[1].email)

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isloggedIn'));

