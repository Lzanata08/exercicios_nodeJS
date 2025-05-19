const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Digite um número para ver sua tabuada: "));

console.log(`\nTabuada do ${numero}:`);

for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}
