// inheritance we use in this file so we extends the property of user in a teacher


class user {
    constructor(username){
        this.username=username;
    }

    CallMe(){
        console.log(`USER NAME IS:${this.username}`)
    }
}

class Teacher extends user{
    constructor(username, email, password){
        super(username)
        this.email=email;
        this.password=password;
    }

    addcourse(){
        console.log(`a new Course Added by :${this.username}`)
    }

}

const chai= new Teacher("Krishna","kkprp@snapdeal.com","123")

const chaimasala=new user("trisha","kri@googlecom","5556")

chai.CallMe()
chaimasala.CallMe()


console.log(chai instanceof user);
console.log(chaimasala instanceof user);


console.log(chai instanceof Teacher);
console.log(chaimasala instanceof Teacher);

