//Condicionais



// switch (variavel) { // vairavel que mativa o case
//     case value: // cenarios a serem tratados utlizadando case
        
//         break;

//     default:
//         break;
// }
let permissao // comum, gerente, diretor
permissao = "diretor"
// permissao = "gerente"
// permissao = "comum"

switch (permissao) { // vairavel que mativa o case
    case "comum": // cenarios a serem tratados utlizadando case
        console.log("usuario comum")
        break;//para ele encontrar a condicao e nao continuar lendo
    case "gerente": // cenarios a serem tratados utlizadando case
        console.log("usuario gerente")
        break;
    case "diretor": // cenarios a serem tratados utlizadando case
        console.log("usuario diretor")
        break;

    default: // aqui posso definir o que vai ser excecutados cada nao caia em nenhum dos cases
    console.log("usuario nao reconhecido")    
    break;
}