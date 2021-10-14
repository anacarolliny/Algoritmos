//TIPOS DE LAÇOS DE REPETIÇÃO

// 1. For 
// 2. While 
// 3. Do..While 
// 4. For .. In 
// 5. For ..of 


for (let index = 0; index < 10; index++) { // aqui eu quero dizer o meu index inicia em 0, o que vai correr meu loop, contar, e quero dizer que ele vai repetir até o 5 e que ele vai incrementar o qeu vou passar pra ele 5 vezes
   console.log("estou aprendendo", index + " Esse é meu loop, quantas vezes ele esta percorrendo")
    
}
for (let index = 0; index < 10; index++) { // aqui eu quero dizer o meu index inicia em 0, o que vai correr meu loop, contar, e quero dizer que ele vai repetir até o 5 e que ele vai incrementar o qeu vou passar pra ele 5 vezes
  if(index % 2 !== 0 ){ // se o restante da divisao for diferente de 0 emtao imprime : impares
    console.log("Imprima os valores impares", index)
  }
    
}
for (let index = 0; index < 10; index++) { // aqui eu quero dizer o meu index inicia em 0, o que vai correr meu loop, contar, e quero dizer que ele vai repetir até o 5 e que ele vai incrementar o qeu vou passar pra ele 5 vezes
  if(index % 2 == 0 ){ // se o restante da divisao for diferente de 0 emtao imprime : impares
    console.log("Imprima os valores pares", index)
  }
    
}