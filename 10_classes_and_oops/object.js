function multiplyby5(num){
    return num*5;
}
multiplyby5.power=2

console.log(multiplyby5(5))
console.log(multiplyby5.power)
console.log(multiplyby5.prototype)

function createuser(username,score){
    this.username=username;
    this.score=score;

}

createuser.prototype.increment=function(){
    this.score++;
}
createuser.prototype.Printme=function(){
    console.log(`Score= ${this.score}`);
}

const chai= new createuser("chai",25);
const tea= new createuser("tea",250);

chai.Printme()
chai.increment()
chai.Printme()