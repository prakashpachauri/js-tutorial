let myname="Prakash       ";
let aname="Pachauri       ";


// In this file we learn about how to trim the string remove the space and count the length of a string
// In this file we create a method/function and we use in this file
// we learn the __proto__ 
// 

/*console.log(myname.trim().length);
console.log(myname.length);
console.log(aname.length);
console.log(myname.truelength);

let heros=["thor","spiderman"]

let herospower={
    thor: "hammer",
    spiderman:"Sling",
    getspiderrpower: function(){
        console.log(`spider power is ${this.spiderman}`);
        

    }
}
// getspiderrpower();
console.log(herospower.getspiderrpower());
console.log(herospower);
Object.prototype.hitesh=function(){
    console.log("hitesh is in all object");
}
heros.hitesh()
herospower.hitesh()

Array.prototype.heyhitesh=function(){
    console.log("hii this is array function is available in an array function");
}

// herospower.heyhitesh()
heros.heyhitesh()

String.prototype.checkstring=function(){
    console.log("this is string ")
}

myname.checkstring()*/
// inheritance

const user={
    name:"chai",
}

const Teacher={
    makevideo:true,
}

const TeachingSupport={
    isavailable:false,
}

const TASupport={
    Make_Assignment:"js Assignment",
    fulltime:true,
    __proto__:TeachingSupport,

}

Teacher.__proto__=user

// console.log(TASupport,Teacher,TeachingSupport);

let anothername="chaiaurcode    ";

String.prototype.truelength=function(){
    console.log(this);
    console.log(`True length is ${this.trim().length}`)
}

anothername.truelength();

"Prakash".truelength();
"This quick brown fox jumps over the lazy dog.".truelength()









