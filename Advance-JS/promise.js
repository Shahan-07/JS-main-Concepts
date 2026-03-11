
const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        //console.log('Async task is completed');
        resolve()
    },1000)
})

promiseOne.then(function(){
    //console.log('promise consumed'); 
})


const promiseTwo = new Promise((resolve , reject)=>{
    resolve({username:'Alam' , email: '@gmail.com'})
})

promiseTwo.then((user)=>{
    //console.log(user);
    
})


const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = false;
        if(!error){
            resolve({username:'its me', email: 'gmail.com'})
        }else{
            reject('Error: Something went wrong')
        }
    },1000)
})

promiseThree.then((resolve)=>{
//console.log(resolve);
}).catch((error)=>{
   // console.log(error);
    
})


const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({username:'its me', email: 'gmail.com'})
        }else{
            reject('Error: Something went wrong')
        }
    },1000)
});

async function consumePromiseFour(){
    try {
        const response = await promiseFour
        //console.log(response);
        
    } catch (error) {
        //console.log(error);
        
    }   
}

consumePromiseFour()



// gettng data from an Api

// 1st method by try and catch

async function getAllusers(){
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const data = await response.json()
        console.log(data);
    } catch (error) {
       console.log('Error : ', error);
        
    }
    
}


// 2nd method by .then and catch

const user = async function getAllusers(resolve,reject){

        const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const data = await response.json()
        console.log(data);
}

user().then((resolve)=>{
    console.log('resolve',resolve);
}).catch((error)=>{
    console.log('error',error);
})