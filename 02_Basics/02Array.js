// Array is a object and it is collect multiple elements and value in one Array
// We are use several function in an array
// first we use push function in an array to add the array to  existing Array

// we use concate function to add two array without any square Bracket
//  like this ["Thor","Ironman","Spiderman","Superman","Batman","Flash"]
// Spread operation to add two array in one array
// .flat function is used to multiple array multi interenal array in one array separtely 



const marvel_heros=["Thor","Ironman","Spiderman"]
const dc_heros=["Superman","Batman","Flash"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const all_heros=marvel_heros.concat(dc_heros)
// console.log(all_heros);

// spread operator in js

const heros=[...marvel_heros,...dc_heros]
// console.log(heros);
 const anotherarray=[1,2,3,[4,5,6],7,[4,5,6,[7,8,9],10,11]]
const real_anotherarray=anotherarray.flat(Infinity)
console.log(real_anotherarray)

console.log(Array.from({name:"Hitesh"}));
// .from({name:"Hitesh"})); this function is used in next video
console.log(Array.of("Hitesh"));
// .of it can create an array of hitesh
console.log(Array.from("Hitesh"));
//.from it can separate character in an array

console.log(Array.isArray("Hitesh"))
// is Array it check it is Array or not


const Score1=100
const Score2=200
const Score3=300

// console.log(Array.of(Score1,Score2,Score3));


// 7:29PM js tutorial 04/06/2025 Wednesday by Prakash Pachauri





