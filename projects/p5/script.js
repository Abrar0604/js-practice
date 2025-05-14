const head=document.querySelector('h1')
const start=document.querySelector('#start')
const sto=document.querySelector('#stop')
const body=document.querySelector('body')
let i=1
const randcolor=()=>{
    let color='#'
    const k='0123456789abcedf'
    for(let j=0;j<6;j++){
        color+=k[Math.floor(Math.random()*16)]
    }
    return color;
}
const f1=()=>{
    head.textContent='Timer Started'
    let it=document.createElement('div')
    it.textContent=i
    console.log(i)
    i++
    const c=randcolor()
    console.log(c);
    body.style.backgroundColor=c
    head.appendChild(it)
}
let t=null;
start.addEventListener('click',()=>{
    if(t!=null) return;
    t=setInterval(f1,1000)
    k=setTimeout(()=>{console.log('i only run once');
    },500)
});
sto.addEventListener('click',()=>{
    console.log('ending counting')
    clearInterval(t);
    t=null
})