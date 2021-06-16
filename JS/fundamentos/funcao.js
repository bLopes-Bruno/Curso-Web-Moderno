console.log(typeof Object)
class Produto{}
console.log(typeof Produto)

//FUNÇÃO SEM RETORNO
function imprimirSoma(a, b){
    console.log(a + b)
}
imprimirSoma(2, 3)
/*imprimirSoma(2)
imprimirSoma()
imprimirSoma(2, 3, 4, 5)*/

//FUNÇÃO COM RETORNO

function soma(a, b=0){
    return a+b
}
console.log(soma(4, 3))
/*console.log(soma(2))
console.log(soma())*/

//ARMAZENANDO UMA FUNÇÃO EM UMA VÁRIAVEL

const imprimeSoma = function (a, b){
    console.log(a+b)
}

imprimeSoma(2, 3)

//ARMAZENANDO UMA FUNÇÃO ARROW EM UMA VÁRIAVEL

const somar = (a, b) => {
    return a+b
}
console.log(10,2)

const subtracao = (a, b) => a-b
console.log(subtracao(10,5))
