const converterInt=(e)=>parseInt(e)
const dobrar=(e)=>e*2
let num=['1','2','3','4','5'].map(dobrar)
console.log(num)


/*

num.map(converterInt)
console.log(num)


cursos.map((el,i)=>{
    console.log('curso : ' + el + ' - Posição do curso: ' + i )
})

const cursos = ['HTML','CSS','JAVASCRIPT','PHP','REACT']
let c = cursos.map((el,i)=>{ 
    return el
})

console.log(c)


let el = document.getElementsByTagName('div')
el=[...el]
console.log(el)
el.map((e,i)=>{
    e.innerHTML='cfb cursos'
 
})

const el=document.getElementsByTagName('div')
const val=Array.prototype.map.call(el,({innerHTML})=>innerHTML)
console.log(val)
*/