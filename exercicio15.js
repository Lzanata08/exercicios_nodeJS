let n1 = 0;
let n2 = 1;
let proximo;

console.log("Os 10 primeiros números da sequência de Fibonacci:");

for (let i = 1; i <= 10; i++) {
    console.log(n1);
    proximo = n1 + n2;
    n1 = n2;
    n2 = proximo;
}
                