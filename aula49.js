const p_array=document.querySelector('#array')
const txt_pesquisar=document.querySelector('#txt_pesquisar')
const btnPesquisar=document.querySelector('#btnPesquisar')
const resultado=document.querySelector("#resultado")


const elementos_array=[9,6,15,13,12]
p_array.innerHTML='['+elementos_array+']'

btnPesquisar.addEventListener('click',(evt)=>{
    resultado.innerHTML='array não encontrado' 
    const ret = elementos_array.some((e,i)=>{
        if(e<18){
            resultado.innerHTML='array encontrado ' + i 
        }
        return e>=18
    })
    if(ret){
        resultado.innerHTML='Ok'
    }
    console.log(ret)
       
    })
   

 