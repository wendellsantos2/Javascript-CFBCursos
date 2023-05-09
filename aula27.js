function* contador(){
    let i=0
    while(true){
        yield i++
        if(i>5)
        break

    }
}
const itc = contador()
for(let c of itc){
    console.log(c)  
}
  
 

/*

perguntas(){
    const nome= yield 'qual seu nome?'
    const esport= yield 'qual seu esport favorito?'
    return ' seu nome é ' + nome + ' seu esporte favorito é '+ esport
}


const itp=perguntas()
console.log(itp.next().value)
console.log(itp.next('wendell').value)
console.log(itp.next('dota 2').value)





cores(){
        yield 'vermelho'
        yield 'verde'
        yield 'azul'
}

let itc=cores()  
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)*/