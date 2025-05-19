const prompt = require('prompt-sync')();

console.log("=== MENU INTERATIVO ===");
console.log("1. Dizer Olá");
console.log("2. Mostrar Data Atual");
console.log("3. Sair");

let opcao = prompt("Escolha uma opção (1, 2 ou 3): ");

switch(opcao) {
    case '1':
        console.log("Olá! Seja bem-vindo(a)!");
        break;
    case '2':
        const dataAtual = new Date();
        console.log("Data atual: " + dataAtual.toLocaleString());
        break;
    case '3':
        console.log("Encerrando o programa. Até mais!");
        break;
    default:
        console.log("Opção inválida. Por favor, escolha 1, 2 ou 3.");
}
