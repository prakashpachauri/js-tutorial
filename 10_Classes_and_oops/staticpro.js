class user{
    constructor(username){
        this.username=username;

    }

    callme(){
        console.log(`Usersname is :${this.username}`)
    }

    // when we use static we can call this function without creating an object of that class
     static createId(){
        return `123`
        
    }
}


const chai = new user("krishna")
chai.callme()
console.log(chai.createId());


class Teacher extends user{
    constructor(username,email,password){
        super(username)
        this.email=email;
        this.password=password;
    }
}

const iphone =new Teacher("iphone","iphone@apple.com","5556")
iphone.callme()
// console.log(iphone.createId());