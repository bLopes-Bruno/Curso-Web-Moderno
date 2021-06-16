const escola = "cod3r"
const lista = "Ana, Maria, Pedro"

console.log(escola.charAt(4))
console.log(escola.indexOf('c')) //pega o indice da letra c

console.log(escola.substring(1)) //pega os valores a partir do indice 1
console.log(escola.substring(0,3)) //valores do indice 0 até o 3

console.log("escola ".concat(escola).concat("!")) //concatenação de strings
console.log("escola "+escola+"!")

console.log(escola.replace(3, 'e'))//troca o 3 por e

//transformar string em vetor
console.log(lista.split(", "))
console.log("\n")

//Template String

const nome = "Bruno"
const concatenar = "Olá " + nome + "!"
const template = `
    Olá
    ${nome}`

console.log(concatenar, template)

console.log(`1 + 1 = ${1+1}`)

const up = texto => texto.toUpperCase() //criação de uma função para maiusculo

console.log(`Ei....${up('cuidado')}!`)

let pessoa
console.log(pessoa || "Desconhecido")

