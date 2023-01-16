var num = [5, 8, 2, 9, 3]
num.push(1)  // push poe o var na ultima posição
num.sort()  // poe em ordem
console.log (num)
console.log(`O vetor tem  ${num.length} posições`)   //  length quer dizer a quantidade de itens dentro do vetor
console.log(`O primeiro valor do vetor é ${num[0]}`)
var pos = num.indexOf (4)
if (pos == -1){
    console.log ('O valor não foi encontrado!')
}else {
    console.log (`O valor está na posição ${pos}`)
}
