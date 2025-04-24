function k1(a){
    return this;
}

let a={
    name: "Example", value: 42,
    k: function(){
        return this
    }
}

let b={
    name: "Example", value: 42,
    k: ()=>{
        return this
    }
}
console.log(a.k());
console.log(b.k());

//This keyword cannot be used in this and arrow funtion inside an object as it doesnot have context understanding