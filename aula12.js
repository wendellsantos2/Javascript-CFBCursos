/*
const jogador1 = {nome: "Bruno",energia:100,vidas:3,magia:21}

const jogador2 = {nome: "dell",energia:200,vidas:1,velocidade:2}

const jogador3 = {...jogador1,...jogador2}

console.log(jogador3)

let n1 = [10,20,30]
let n2= [11,22,33,54,21,25,66,55]
let n3 = [...n1,...n2]

console.log("n1: "+n1)
console.log("n2 "+n2)
console.log("n3 "+n3)


const soma= (v1,v2,v3)=>{
    return v1+v2+v3
}
let valores = [1,2,3]
console.log(soma(...valores))
*/


const objs1 = document.getElementsByTagName("div")
const objs2 = [...document.getElementsByTagName("div")]
objs2.forEach(element=>{
    element.innerHTML="curso"
})
console.log(objs1)
console.log(objs2)