const mynum=[1,2,3]


// // const mytotal=mynum.reduce(function(acc,currval){

//     console.log(`acc ${acc}, currval ${currval}`)
//     return acc+currval

// },0)


// console.log(mytotal);


const mytotal=mynum.reduce((acc,currval)=>(acc+currval),0)

console.log(mytotal);


const shoppingCart=[
    {
        itemname:"js Course",
        price:699,
    },
    {
        itemname:"python Course",
        price:1699,
    },
    {
        itemname:"Sql Course",
        price:699,
    },
    {
        itemname:"DSA Course",
        price:11699,
    },
    {
        itemname:"C language Course",
        price:6699,
    },
    {
        itemname:"Data Science Course",
        price:699,
    },
    {
        itemname:"Django  Course",
        price:6599,
    },
]

const PriceToPay=shoppingCart.reduce((acc,item)=>(acc+item.price),0)
console.log(PriceToPay);
