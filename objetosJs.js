//Estudando objetos


//Maneira de escrever algo
let nome = "Rafael"
let idade = 25
let estaAprovado = true
let sobrenome = undefined 

console.log(nome)
console.log(idade)
console.log(estaAprovado)
console.log(sobrenome)

//utilizando objetos para reunir todas propriedades em um unico objeto


let nome2 = {
    nome : "Rafaela",
    idade : 25,
    estaAprovado : true,
    sobrenome : undefined,
    profissao : "programadora",
    endereco : "Belém"

}

console.log(nome2)

nome2.nome = "Carol"
nome2.idade = 26
nome2.estaAprovado = true
nome2.sobrenome = "Sacramento"
nome2.profissao = "Developer"


console.log(nome2)