// class User {
//     constructor(username, password,email){
//         this.username=username;
//         this.password=password;
//         this.email=email
//     }

//     // create a function

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeusername(){
//         return `${this.username.toUpperCase()}`
//     }

// }

// const tea= new User("Prakash","123","prakashpachauri@google.com")

// console.log(tea.changeusername());
// console.log(tea.encryptPassword());
// console.log(tea);

// behind the scenes

function User1(username, password,email){
    this.username=username;
    this.password=password;
    this.email=email

   User1.prototype.UserencryptPassword=function(){
        return `${this.password}abc`
    }
    User1.prototype.changeusername=function(){
        return `${this.username.toUpperCase()}`
    }
}

const tea1= new User1("Mohit","123","m123@google.com")

console.log(tea1.changeusername());
console.log(tea1.UserencryptPassword());
console.log(tea1);