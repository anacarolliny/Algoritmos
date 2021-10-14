const VAR =0
VAR =2

// levando em consideracao a velocidade maxima de 80 km em uma determinada rua , crie um programa que recebe do usuario um valor que representa
// a velocidade e com base nessa velocidade diga se ela tomou uma multa multa , leve , grave ou gravissima. levando em consideracao que se a pessoa estiver abaixo da velocidade maxima seu 
// programa deve exibit "nao houve multa", caso esteja em ate 10 km acima, deve exibir : levou multa leve, caso esteja
// entre 11 a 20 km acima da velocidade maxima, exibirt : "levou multa grave", e caso esteja acima de 20 km acima da velocidade 
// maxima. exiba : "levou gravissima"


// analise criticamente o problema e descubra :
// Tente explicar esse problema pra voce mesmo em voz alta e peça mais informacoes/investigue
// mais até voce compreender completamente o problema 

// 1. Quais sao os dados de entrada necessários ?
// velocidadeMaxima
// velocidadeUsuario

// 2. O que devo fazer com estes dados ?
// Inserir ao usuario  
// 3. Quais sao as restricoes deste problema ?


// 4. Qual é o resultado esperado ?
// exibir o resultado se houve não multa, se foi leve, grave ou gravissima


// 5. Qual é a sequência de passos a ser feitas para chegar ao resultado esperado ?

// inserir velocidade maxima 
// inserir velocidade do usuario 
// se velocidadeUsuario estiver abaixo de velocidadeMaxima exibir : X
// se velocidadeUsuario estiver a 10 acima  de velocidadeMaxima exibir : X
// se velocidadeUsuario estiver 11 a 20 de velocidadeMaxima exibir : X
// se velocidadeUsuario estiver e acima de 20 de velocidadeMaxima exibir : X

let velocidadeUsuario = prompt("Digite a velocidade do usuario")
let velocidadeMaxima = 80


if(velocidadeUsuario < velocidadeMaxima){
    console.log("Não houve multa")
}


if ( velocidadeUsuario + 10 > velocidadeMaxima && velocidadeUsuario <= 90) {
    console.log("multa leve")
   
}

if (  velocidadeUsuario + 12 > velocidadeMaxima && velocidadeUsuario <= 100) {
    console.log("multa grave")
   
}

if ( velocidadeUsuario + 20 > velocidadeMaxima && velocidadeUsuario > 100) {
    console.log("multa gravissima")
   
}


// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }