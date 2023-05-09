const valor_padrao=0
let valor = 0 

 

function add(v){
    return valor+v
}
function soma(n1=valor_padrao,n2=valor_padrao){
    let res
    res = n1+n2
    return res
}
let resultado_soma=soma(10,10)
console.log(resultado_soma)
 