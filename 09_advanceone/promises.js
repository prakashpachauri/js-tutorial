const promise = new Promise (function(resolve,reject){
    // Do any async task
    // DB Call , Cryptography, Network

    setTimeout(function(){
        console.log('Async task one is complete')
        resolve();
    },1000);
});

promise.then(function(){
    console.log('Async task is consumed')
})

// Second Promise without holding the variable

new Promise (function(resolve,reject) {
    setTimeout(function(){
        console.log('Async task 2')
        resolve()

    },1000)
    
}).then( function(){
 console.log('task two is resolved')
})


// Promise Three

const 