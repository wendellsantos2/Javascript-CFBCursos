function aluno(nome,nota){
    this.nome=nome
    this.nota=nota

    this.dados_anonimo= function(){
        setTimeout(function(){
            console.log(this.nome)
            console.log(this.nota)
        },2000)
    }

    this.dados_arrow= function(){
        setTimeout(()=>{
            console.log(this.nome)
            console.log(this.nota)
        },2000)
    }
    
}

const all = new aluno("dell",200)
all.dados_anonimo()
all.dados_arrow()
