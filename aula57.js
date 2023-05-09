class Carro {
    canal = 'CFB Cursos'
    constructor(pnome,ptipo){
        this.nome = pnome
        this.canal='Youtube'
     
        if(ptipo==1){
            this.tipo='Esportivo'
            this.velmax=300
        }else if(ptipo==2){
            this.tipo = 'Utilitario'
            this.velmax=100
        }else if(ptipo==3){
            this.tipo = 'Passeio'
            this.velmax=160
        }else{
            this.tipo = 'Militar'
            this.velmax=180
        }
        
    }
    getNome(){
        return this.nome
    }
    getTipo(){
        return this.tipo
    }
    getVelMax(){
        return this.velmax
    }
    getInfo(){
        return [this.nome,this.tipo,this.velmax]
    }
    setNome(nome){
            this.nome = nome
    }

    setTipo(tipo){
        this.tipo = tipo
}
    setVelMax(velmax){
        this.velmax = velmax
    }
 
    info(){
        console.log(`Nome :   ${this.nome}`)
        console.log(`Tipo :   ${this.tipo}`)
        console.log(`V.Max :  ${this.velmax}`)
        console.log(`Canal :  ${this.canal}`)
        console.log('-------------------')
    
    }
}

let c1 = new Carro('rapidao',1)
let c2 = new Carro('utilitario ',2)
let c3 = new Carro('super luxo ',3)
let c4 = new Carro('bombadao',4)

c1.setNome('Super Veloz')
c1.setVelMax(500) 
c1.info()
    

 