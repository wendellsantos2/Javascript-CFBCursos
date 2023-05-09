const caixa = document.querySelector('#caixa')
let cores = ['azul','verde','vermelho']
let cursos=['HTML', 'CSS','JAVASCRIPT',cores ]

 //cursos[0] = 'C++'
 
//cursos.push('python')//adiciona o elemento do final

//cursos.unshift('python')//adiciona o elemento do começo

//cursos.shift('python')//remove o elemento do começo
 
console.log(cursos[3][1])

cursos.map((el)=>{
    let p=document.createElement('p')
    p.innerHTML=el
    caixa.appendChild(p)
})
console.log(cursos)
