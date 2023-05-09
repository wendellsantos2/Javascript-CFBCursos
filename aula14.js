let colocacao = 5

switch(colocacao){
    case 1:
        console.log('primeiro lugar')
        break
    case 2:
        console.log('segundo lugar')
    case 3:
        break
    case 4: case 5: case 6:
        console.log("premio de participacao")
        break
    default:
        console.log('nao subiu ao podio')
        break
}