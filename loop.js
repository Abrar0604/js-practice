// for of loop

let ar=[1,2,3,4,5]

for (const i of ar) {
    console.log(i);
    
}

let o={}
o[1]='a'
o[2]='b'
for(const i in o){
    console.log(i,o[i]);
    
}

// ar.forEach( function ( i,j ,a){
//     console.log(a);
// } )

let j=ar.filter(i => i>=3).map(j=> j+10)
console.log(j,typeof j);
