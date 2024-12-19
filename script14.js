//14. Crear una función que reciba 1 número, imprimir si es negativo o si es positivo o si es cero.
function imprimirNumero(a) {
    if (a > 0) {
        console.log(`${a} es positivo`);
    } else if (a < 0) { 
        console.log(`${a} es negativo`);
    } else {
        console.log(`${a} es cero`);
    }
}

imprimirNumero(100);
imprimirNumero(-50);
imprimirNumero(0);