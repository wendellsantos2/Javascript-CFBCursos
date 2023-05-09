const caixa1=document.querySelector('#caixa1')
const caixa2=document.querySelector('#caixa2')
const btn_tranferir=document.querySelector('#btn_tranferir')
const todosCursos=[...document.querySelectorAll('.curso')]

todosCursos.map((el)=>{
    el.addEventListener('click',(evt)=>{
        const curso =  evt.target
        curso.classList.toggle('selecionado')
    })
})

btn_tranferir.addEventListener('click',()=>{
    const cursosSelecionados=[...document.querySelectorAll('.selecionado')]
    const cursosNaoSelecionados=[...document.querySelectorAll(".curso:not(.selecionado)")]
     
    cursosSelecionados.map((el)=>{
        caixa2.appendChild(el)
    })
         
    cursosNaoSelecionados.map((el)=>{
        caixa1.appendChild(el)
    })
})