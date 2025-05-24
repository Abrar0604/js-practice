const promise1=new Promise(function (resolve,reject){
    // Do async tasks
    // DB calls,cryptography,network calls
    setTimeout(function(){
        console.log('Async task is complete');
        const data='Some data';
        const error='something went wrong';
        let f=false;
        if(f)
            resolve(data);
        else
            reject(error);
    },2000);
});

promise1.then(function(data){
    console.log("promise consumed");
    console.log(data);
}).catch((e)=>{
    console.log(e);
    
});
