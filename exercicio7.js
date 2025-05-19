const prompt = require('prompt-sync')();


let quantidade = parseInt(prompt("Digite a quantidade de maçãs compradas: "));
let preco = 0;


if (quantidade < 12) {
    preco = 0.30;
} else {
    preco = 0.25;
}

let total = quantidade * preco;

// Saída
console.log(`O valor total da compra é R$ ${total.toFixed(2)}`);
