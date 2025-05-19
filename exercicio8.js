const prompt = require('prompt-sync')();


let num1 = parseFloat(prompt("Digite o primeiro valor: "));
let num2 = parseFloat(prompt("Digite o segundo valor (diferente do primeiro): "));


if (num1 === num2) {
    console.log("Os valores são iguais. Reinicie e digite valores diferentes.");
} else {
    // Ordenação e saída
    if (valor1 < valor2) {
        console.log(`Ordem crescente: ${num1}, ${num2}`);
    } else {
        console.log(`Ordem crescente: ${num2}, ${num1}`);
    }
}
