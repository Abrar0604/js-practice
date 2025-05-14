const container=document.querySelector('.cont')
const tr=container.querySelector('table')
window.addEventListener('keydown',(e)=>{
    console.log(e.key)
    let t=
       ` <tr>
            <td>${e.key===" " ? "space":e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
        </tr>`
    tr.insertAdjacentHTML("beforeend",t)
})