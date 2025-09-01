const promiseOne = new Promise(function(resolve, rejected){
    setTimeout(function(){
        resolve();
        console.log(" Asyn task is completed");
        
    })

})


promiseOne.then(function(){
    console.log("promise is consuemed")
})


new Promise (function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2 is completed");
        resolve();  
    })
}).then(function(){
    console.log("Promise 2 is consumed")
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            console.log("Async task 3 is completed");
            resolve();
        }else{
            console.log("Async task 3 is not completed");
            reject('Error: Something went wrong');
        }
    })

})

promiseThree.then(function(){
    console.log("Promise 3 is consumed")
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("Finally will be executed always")
})