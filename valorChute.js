let valorAleatorio = Math.floor(Math.random() * 10 + 1)
console.log(valorAleatorio)


acertou = false

while (acertou == false) {
    let valorChute = prompt("digite valor do chute de um a 10")
    if (valorChute < valorAleatorio) {
            console.log("Valor é abaixo do valor aleatório")

        }
        else if (valorChute > valorAleatorio) {
            console.log("Valor é acima do valor aleatório")
     
        }

        else if (valorChute == valorAleatorio) {
            acertou = true
            console.log("Valor é igual")
            
      
        }

}

// if(valorChute < valorAleatorio) {
//     console.log("Valor é abaixo do valor aleatório")
// } else if(valorChute > valorAleatorio) {
//     console.log("Valor é acima do valor aleatório")
// }else if(valorChute == valorAleatorio){
//     console.log("Valor é igual")
// }
