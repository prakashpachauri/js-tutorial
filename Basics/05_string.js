const name="Prakash"
const repocount=50
//console.log(name  +  repocount +"    Value");
console.log(`Hii my name is ${name}and my repo count is ${repocount} value`);

const gamename= new String("Prakash-Pachauri-in");
console.log(gamename[0]);
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(5));
console.log(gamename.indexOf('i'));
console.log(gamename.substring(0,8));
console.log(gamename.slice(0,-14));

console.log(gamename.__proto__);

const newstring=gamename.substring(0,5);
console.log(newstring);

const anotherstring=gamename.slice(-14,5);
console.log(anotherstring);

const url="https://prakashpachauri.com%20prakashpachauri:homepage"
console.log(url.replace('%20','-'));
console.log(url.includes('prakash'));

const stname= "   Prakash     "
console.log(stname);
console.log(stname.trim());

//split funciton is used for separate on the bases of '-' in an array

const newst=gamename.split('-')
console.log(newst);





