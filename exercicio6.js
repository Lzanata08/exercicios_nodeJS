const prompt = require('prompt-sync')();


let A = parseFloat(prompt("Digite o valor do lado A: "));
let B = parseFloat(prompt("Digite o valor do lado B: "));
let C = parseFloat(prompt("Digite o valor do lado C: "));


if (A < B + C && B < A + C && C < A + B) {
    console.log("Os lados formam um triângulo.");

   
    if (A === B && B === C) {
        console.log("Tipo: Triângulo Equilátero");
    } else if (A === B || A === C || B === C) {
        console.log("Tipo: Triângulo Isósceles");
    } else {
        console.log("Tipo: Triângulo Escaleno");
    }

} else {
    console.log("Os lados fornecidos NÃO formam um triângulo.");
}
