function setusername(username){
    this.username=username
}

function createuser (username,password,email){
    setusername.call(this ,username)
    this.password=password
    this.email=email

}

const userdetail= new createuser("PrakashPachauri","Prakasdfl","prakash@amazon.com")

console.log(userdetail);
console.log(userdetail.username);
console.log(userdetail.password);
console.log(userdetail.email);   

