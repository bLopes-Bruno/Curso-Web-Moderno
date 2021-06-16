const peso1 = 1.0
const peso2 = 2.1

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avalicao1 = 9.586
const avaliacao2 = 8.8
const total = avalicao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(1))
console.log(media.toString(2)) //em binário

/*
* Cuidados com a utilização do number
*/

console.log(7/0)
console.log("10" / 2)
console.log("show" * 2)
console.log(0.1 + 0.7)
console.log((0.1 + 0.7).toFixed(3))

//Classe Math

const raio = 5.6
const area = Math.PI * Math.pow(raio, 2)

console.log(area.toFixed(3))