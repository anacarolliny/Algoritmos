//verbo + substantivo
let corSite = "azul"
function resetaCor(){//exemplo de funcao sem parametros
    corSite =""
} //padrão de uma função

console.log(corSite)
resetaCor()
console.log(corSite) // retorna undefined


// //nesse bloco de código eu criei uma cor, criei uma funcao para resetar essa cor
// imprimi na tela a atual cor 
// depois chamei a funcao para resetar 
// depois imprimi novamente com a cor resetada, isso sem parametros

function resetaCor(cor){ // aqui é um exeplo de funcao com parametros, como entrada de dados
    corSite = cor //passando como argumento, que sao o que vou fazer com os valores que foram passados como parametros
}

console.log(corSite) // retorna undefined
resetaCor("Vermelho")
console.log(corSite)

function resetaCor(cor, tonalidade){ // aqui é um exeplo de funcao com parametros, como entrada de dados
    corSite = cor + tonalidade //passando como argumento, que sao o que vou fazer com os valores que foram passados como parametros
}

console.log(corSite) // retorna undefined
resetaCor("Verde", " claro")
console.log(corSite)

let nomeOficial = "Ana"
function colocaSobrenome(aposOnome){
    sobrenome = " " + aposOnome
}

console.log(nomeOficial)
colocaSobrenome("Carolliny")
console.log(nomeOficial + sobrenome)

let nomeCompleto
function adicionaFullname(nome, fullname) {
    nomeCompleto = nome + " " + fullname
    
}

console.log(nomeCompleto)
adicionaFullname("Ana Carolliny", "Santos Sacramento")
console.log(nomeCompleto)

let paciente 
function cadastraPaciente(nome, idade, endereco, profissao) {
    paciente = nome + " " + idade + " " + endereco + " " +profissao
}

console.log(paciente)
cadastraPaciente("Ana Claudia", 25, "Conjunto Tapajos", "Devloper")
console.log(paciente)

//primeiro tipo é da função que realiza uma tarefa e não retorna nada
function dizerNome() {
    console.log("Ana")
}

dizerNome()


function dizerNome() {
    console.log("Ana")
}


dizerNome()

//faz u mcauclo ou operacao e retorna algo
//segundo tipo de funcao que retorna o parametro que vai ser passado vezes 2


function MultiplicaPorDois(valor) {
    return valor * 2 // aqui no return eu digo que algum momento vou retornar o resutlado dessa funcao
}

console.log(MultiplicaPorDois(2))

function soma(valor) { // retorna o parametros que vai ser passado + o proprio parametro
return valor + valor

    
}

console.log(soma(2))

function subtrai(valor) {
return valor - valor

    
}

console.log(subtrai(2))

function multiplica(valor) {
return valor * valor

    
}

console.log(multiplica(2))

function divide(valor) {
return valor / valor

    
}

console.log(divide(2))


let resultadoSoma = soma(3)
let resultadoSubtrai = subtrai(3)
let resultadoMultiplica = multiplica(3)
let resultadoDivide = divide(3)

console.log(resultadoSoma, resultadoSubtrai, resultadoMultiplica, resultadoDivide)


