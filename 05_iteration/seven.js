// map function is used for extra function and checking the condition in javascript

const myNumers=[1,2,3,4,5,6,7,8,9,10]

const newNum=myNumers

        .map((num)=>num*10)
        .map((num)=>num+1)
        .filter( (num)=>num>=15 )

console.log(newNum);
