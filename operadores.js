//Operadores Aritiméticos(matemáticos)
// +,-,*,/,**
let salario = 100

console.log(salario+salario)
console.log(salario-salario)
console.log(salario*salario)
console.log(salario/salario)
console.log(5 ** 5) // esponencial

//Operador de incremento ++
//Operador de decremento --

let idade = 18

console.log(idade++)
console.log(idade)
console.log(++idade)

console.log(idade--)
console.log(idade)
console.log(--idade)





//Operadores Atribuição

let valorTecladoGamer = 100 // valor que esta sendo passado para a variavel atraves do operador =
console.log(valorTecladoGamer)
valorTecladoGamer +=  valorTecladoGamer
console.log(valorTecladoGamer)
valorTecladoGamer = valorTecladoGamer + valorTecladoGamer
console.log(valorTecladoGamer)


//Operadores de igualdade

//Igualdade estrita

console.log( 1 === 1)//significa que ele compara o tipo, o valor também
console.log( "1" === 1)

//Igualdade solta
console.log( 1 == 1) //compara apenas os valores
console.log( "1" == 1)//não recomendado

//Operador ternário

//tem um cliente,  100  pontos premium se não ele vai ser tipo comum

let pontos = 105
let tipo = pontos > 100 ? "premium " : "comum" // se pontos for maior que 100 entao é premium se não ele é comum
console.log(tipo)

// let tipo = pontos
// if (tipo > 100){
//     console.log("premiun")
// }else{
//     console.log("comum")
// }


//Operadores lógicos

//AND, OR AND NOT

//OPERADOR Lógico e (&&)

//Retorna true se os dois operandos forem true

console.log(true && true)
console.log(true && false)

let maiorDeIdade = true
let possuiCarteiradeTrabalho = true  
let podeAplicar = maiorDeIdade && possuiCarteiradeTrabalho

console.log(podeAplicar)

//OPERADOR Lógico ou (||)

//Retorna true se um dos operandos forem true


let maiorDeIdade2 = false
let possuiCarteiradeTrabalho2 = true  
let podeAplicar2 = maiorDeIdade2 || possuiCarteiradeTrabalho2

console.log(podeAplicar2)


//OPERADOR Lógico NOT (!)

//Ele nega a afirmação

let candidatoRecusado = !podeAplicar

console.log(candidatoRecusado)

//Comparação não só com booleanos

//Falsy e Trufy

//Falsy : undefined, null, 0, false,"",NaN Not a number


//Truthy
// false || "Rafael"
// false || 1
// false || 1 || 3 // o ou vao comparar o primeiro argumento e parar


let corPersonalizada = "vermelho"
let corPadrao ="Azul"
let corPerfil = corPersonalizada || corPadrao

console.log(corPerfil) // exibe vermelho, porque é o primeiro argumento trufy

let corPersonalizada2 = ""
let corPadrao2 ="Azul"
let corPerfil2 = corPersonalizada2 || corPadrao2

console.log(corPerfil) // exibe azul, porque é o primeiro argumento trufy