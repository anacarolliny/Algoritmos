// let idades = [15,46,75,34,23]
// soma = 0

// for(var i =0; i < idades.length; i++){
//     soma = soma + idades[i]
// }

// console.log(soma)

// let idades = [15,46,75,34,23]
// soma = idades.reduce(function(soma,idades){
//     return soma + idades
// }, 0)
// console.log(soma)

let idades = [15,46,75,34,23]
soma = idades.reduce((soma,idades) => { return soma + idades},0)
 console.log(soma)