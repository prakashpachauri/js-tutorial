// for loop 

for (let i = 0; i <=10; i++) {
    const element = i;

    console.log(element)
    
}
// console.log(element)


for (let i = 0; i<=10; i++) {
    console.log(`Outer loop value,${i}`)
    for (let j = 0; j <=10; j++) {
        const element = j;
        // console.log(`inner loop value, ${j}, Outer loop ${index}`)/
        console.log( i+"*"+j+ "="+i*j);
        
    }
    const element = i;
    // console.log(i)
    
}