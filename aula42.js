const filtroMaior18=(valor)=>{
    if(valor>=18)
    return valor
}
const idades= [23,43,21,3,5,43,12,33,55,66]

const maior=idades.filter( (val,ind,arr)=>{
    if(val >=18)
    return val
})

const menor=idades.filter( (val,ind,arr)=>{
    if(val < 18)
    return val
})
    



console.log(idades)
console.log(maior)
