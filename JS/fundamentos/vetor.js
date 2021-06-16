const vetor = [7.7, 8.9, 6.3, 9.2] //declaração literal de um vetor

console.log(vetor[0], vetor[3])
vetor[4] = 5.2
vetor[10] = 9.9
console.log(vetor) //impressão de todas as posições do vetor
console.log(vetor.length) //quantos elementos tem no vetor (inclui os vazios)

vetor.push({id: 3}, false, null, "teste") //preenche vetor a partir do ultimo elemento inserido
/*não é uma boa prática fazer isso, porém, é aceito.*/

console.log(vetor)

vetor.pop() //retira o ultimo elemento do vetor
delete vetor[10] //exclui o item do indice selecionado

console.log(vetor)

vetor.splice(2, 1)
console.log(vetor)


