const valores =[10,8,2,1,32]
const it_valores=valores[Symbol.iterator]()


const texto ='wendell'
const it_texto =texto[Symbol.iterator]()


console.log(texto)
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())


console.log(it_valores.next())
console.log(it_valores.next())
console.log(it_valores.next())

