// // // Crie um programa que calcule o valor fatorial

// // // #Método 5Q para montar um algoritmo

// // // Analise criticamente o problema e descubra:
// // // Tente explicar este problema para você mesmo em voz alta e peça mais
// // // informações/investigue mais até você compreender completamente o problema.Analise

// // // 1.Quais são os dados de entrada necessários?
// valor aleatorio de 1 a 10
// chute do usuario

// // // 2. O que devo fazer com estes dados ?
// eu devo comparar o chute do usuario com o valor aleatorio que foi gerado no inicio do programa e dizer se o chute foi MutationRecord, menor ou igual ao valor que foi gerado no inicio do programa 


// // // 3. Quais são as restrições deste problema ?
// um valor aleatorio de 1 a 10

// // // 4. Qual é o resultado esperado ?
// o resultado esperado é que o programa deve informar se o chute foi acima, abaixo ou igual ao valor aleatorio gerado no inico do programa

// // // 5. Qual é a sequencia de passos a ser feitas para chegar ao resultado esperado ?
// // input valor_aleatorio de 1 a 10
// // input chute
// // if chute > valor_aleatorio 
// // print "chute foi maior que o valor gerado"

// // if chute < valor_aleatorio 
// // print "chute foi menor que o valor gerado"

// // if chute == valor_aleatorio 
// // print "acertou"



var valordeFatorial = prompt("Insira um fatorial")
if (!Number.isInteger(valordeFatorial) || valordeFatorial < 0) {
    console.log('Não existe fatorial de um número não natural')
}
 

function Fatorial(n) {
    var resultado = n
    for (var i = 1; i < n; i++) {
        console.log(resultado = resultado * i)
    }
    return resultado
}
alert(Fatorial(valordeFatorial))
console.log(Fatorial(valordeFatorial))
