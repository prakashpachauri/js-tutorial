const coding=['js','ruby','java',"python","cpp"]

// forEach not return the values

const values=coding.forEach((item)=>{
    // console.log(item)
    return item


})

// console.log(values);


// filter funtion in java scipt 
// filter function is used to filter the array according to the useer need

// const myNums=[1,2,3,4,5,6,7,8,9,10]

// const newNums=myNums.filter((num)=>{
//     return num>5
    
    
// })
// console.log(newNums);


// forEach funtion on ArraY

const myNums=[1,2,3,4,5,6,7,8,9,10]
const newNums=[]

myNums.forEach(num => {
    if (num>4)
        newNums.push(num)
    
});
console.log(newNums);



// book data to filter the book database and information of the book

const Books=[
    {
        title:"Book one", genre: "fiction",publish: 1981, edition: 2004
    },
    {
        title:"Book two", genre: "Nonfiction",publish: 1992, edition: 2008
    },
    {
        title:"Book three", genre: "History",publish: 1999, edition: 2007
    },
    {
        title:"Book four", genre: "Nonfiction",publish: 1989, edition: 2010
    },
    {
        title:"Book five", genre: "Science",publish: 2009, edition: 2014
    },
    {
        title:"Book Six", genre: "Fiction",publish: 1987, edition: 2010
    },
    {
        title:"Book Seven", genre: "History",publish: 1986, edition: 1996
    },
    {
        title:"Book Eight", genre: "Science",publish: 2011, edition: 2016
    },
    {
        title:"Book Nine", genre: "Nonfiction",publish: 1981, edition: 1989
    },
    {
        title:"Book Nine", genre: "Nonfiction",publish: 1981, edition: 1989
    },
]

let UserBook=Books.filter((bk)=>bk.genre==="History")
 UserBook=Books.filter((bk)=>{ 
    return bk.publish>=1995 && bk.genre==="History" 
})
console.log(UserBook);



// map function 

const myNumers=[1,2,3,4,5,6,7,8,9,10]

const newNum=myNumers
            .map((num)=>num+1)


console.log(newNum);

