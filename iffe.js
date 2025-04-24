//Used to immediately execute a function and prevent variables in the function from global pollution

(function a(){
    console.log('abrar')
})();
(() => {
    console.log('ahammad');
})();

//end iife functions with a semi-colon to make sure end the context of that function

// (function a(){
//     console.log('abrar')
// })()
// let b=(() => {
//     console.log('ahammad');
// })();  
// =================>  THIS THROWS AN ERROR  <=================

// To pass arguments

(function (name){
    console.log(`Hello ${name}`);
    
})('Abrar');

// IFFE's with name are called named iffe

// (function a(){
//     console.log('abrar')
// })();
// let b=(() => {
//     console.log('ahammad');
// })();  