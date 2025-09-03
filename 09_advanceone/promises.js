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

const promiesThree = new Promise (function(resolve, reject){
    setTimeout(function(){
        resolve({ username: 'Prakash', email: 'Prakashpachauri@example.com'})
    },1000)
})

promiesThree.then( function(user){
    console.log(user)
})




// Promise Four

const promiseFour = new Promise (function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({ username: 'Hiteshchaudhy', pass: '123'})
        } else{
            console.log("ERROR : Something went wrong")
        }
    })
})

promiseFour.then((user) => {
    console.log(user)
    return user.username;

}).then( (username) =>{
    console.log(username)
}).catch( function(error){
    console.log(error)
}).finally( () => console.log("Promise is either resole or rejected finally executed")
)



// Promise five - Promise chaining

const promiseFive= new Promise ( function(resolve, reject){{
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:"javascript" ,password:"123"})
        }else{
            console.log("Error: js went wrong")
        }
    })
}})

async function consumepromisefive() {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
        
    }
    
}
consumepromisefive()


// async function getallusers(){
    
// try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data)  
    
// } catch (error) {
//     console.log("E:",error)
    
// }
// }

// getallusers()

fetch('https://jsonplaceholder.typicode.com/users')
.then( (response) => response.json())
.then( (data) => console.log(data))
.catch( (error) => console.log("E:",error))
.finally( () => console.log("Finally executed"))