const caixa = document.querySelector('#caixa')
 

const curso  ='Javascript'
const canal = 'CFB Cursos'
//const frase = 'este é o curso de '+ curso + ' do canal ' +  canal 
const frase =` Este é o <br/> curso ${curso} do <br/> canal ${canal}`
caixa.innerHTML = frase 

