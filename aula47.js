const p_array=document.querySelector('#array')
const txt_pesquisar=document.querySelector('#txt_pesquisar')
const btnPesquisar=document.querySelector('#btnPesquisar')
const resultado=document.querySelector("#resultado")


const elementos_array=[1,2,4,3,2]
p_array.innerHTML='['+elementos_array+']'

btnPesquisar.addEventListener('click',(evt)=>{
    resultado.innerHTML='Valor não encontrado' 
    const ret = elementos_array.find((e,i)=>{
        if(e==txt_pesquisar.value){
            resultado.innerHTML='Valor pesquisado ' + e + ' na posicao ' + i 
            return e
        }
    })
    console.log(ret)
})  

 