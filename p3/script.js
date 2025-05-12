const c=document.querySelector('#clock')


setInterval(function(){
    let t=new Date();
    // c.style.fontSize = '10rem';
    c.innerHTML=t.toLocaleTimeString();
},1000)