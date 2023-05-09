
/*
let n =0
let max = 1000
 while(n<max){
    console.log("CBF cursos  - " + n )
    if(n>10){
        break
    }
    n++
 }

 console.log('fim do programa')

 */
 let n =0
 let max = 1000
 let pares = 0 
for (let i =n; i<max; i++){ 
    if(i%2!=0){
       continue
    } 
    pares++   
}
console.log('quantidade de pares: ' + pares)
console.log('fim do programa')