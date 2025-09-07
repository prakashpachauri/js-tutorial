const user = {
    username:"Prakash",
    logincount: 2 ,
    signedin: true,
    getuserdetail: function() {
        // console.log(`Got the user detail from the database`)
        // console.log(   `username: ${this.username}`)

        console.log(this);
        
    }
}


console.log(user.username)
console.log(user.getuserdetail())
// console.log(this);


// constructor function new, this

function User (username,logincount,isloggedIn){
    this.username=username;
    this.logincount=logincount;
    this.isloggedIn=isloggedIn
    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }
    return this;

}

const userone = new User("prakash",12,true)
const usertwo = new User("prakash",12,false)

console.log(userone)
console.log(usertwo);
console.log(userone.greeting());




