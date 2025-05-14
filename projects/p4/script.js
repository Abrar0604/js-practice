const Num=Math.floor(Math.random()*100+1)
const form=document.querySelector('form')
const w=document.querySelector('#wrapper');
const k=w.querySelectorAll('p');
const c=document.querySelector('.lowOrHi');
const t=document.querySelector('.guesses');
const r=document.querySelector('.lastResult');
const play=document.createElement('a');
play.href='index.html';
play.textContent='Play Again';
play.style.textDecoration='none';
play.style.color='white';
play.style.fontSize='20px';
play.style.border='red solid'
play.style.backgroundColor='red'
play.style.padding='5px';
play.style.margin='5px';
console.log(c);
console.log(Num);
let count=0;
form.addEventListener('submit',function (e){
    e.preventDefault();
    if (count==10){
        form.remove();
        k[1].innerHTML='!!! YOU LOSE !!!';
        k[0].innerHTML='You are out of attempts';
        w.appendChild(play);
        return;
    }
    const input=parseInt(document.querySelector('#guessField').value);
    document.querySelector('#guessField').value='';
    console.log(input);
    if(input===Num){
        form.remove();
        k[1].innerHTML='!!! YOU Win !!!<br>';
        k[0].innerHTML=`You won in ${count+1} attempts`;
        w.appendChild(play);
    }
    else if(input>Num){
        c.textContent='Lower';
    }
    else{
        c.textContent='Higher';
    }
        count++;
        let temp=t.innerHTML;
        t.innerHTML=temp===''?input:`${temp},${input}`;
        r.innerHTML=10-count;

})