// for loop  it is used like a machine

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
// if is use for check the condition statement

for (let index = 0; index <=10; index++) {
    if(index==5){
        // console.log("5 is best number")
    }
    const element =index;
    // console.log(index)
    
}

// break statement

for (let index = 0; index <=10; index++) {
    if (index==6){
        console.log("6 is detection ")
        break;
    }
    const element = index;
    console.log(index)
    
}
// continue statement


for (let index = 0; index <=10; index++) {
    if (index==6){
        console.log("6 is detection ")
        continue;
    }
    const element = index;
    console.log(index)
    
}