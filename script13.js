// 13. Crear una función que reciba 2 números, imprimir si el primer número es divisible por el segundo.

function divisible(a, b) {
    if (a % b === 0) {
        console.log(`${a} Si es divisible por ${b} `);
    } else {
        console.log(`${a} No es divisible por ${b}`);
    }
}
divisible(80, 2);
divisible(75, 2);