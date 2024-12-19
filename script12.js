//12. Crear una función que reciba 1 número, imprimir si es negativo o si es positivo.

function negativoPositivo(a) {
    if (a <= 0) {
        console.log("Su número es negativo.");
    } else {
        console.log("Su número es positivo.");
    }
}
negativoPositivo(30);
negativoPositivo(-30);