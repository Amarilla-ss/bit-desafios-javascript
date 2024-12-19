// 8. Crear seis funciones, (sumar, restar, multiplicar, dividir, módulo, potencia), debe recibir 2 números e imprimir el resultado así: Ej entrada: 8, 4 Ej salida: 8 + 4 = 12
function sumar(a, b) {
    console.log(`${a} + ${b} = ${a + b}`);
}
sumar(8, 4);
sumar(100, 5);

function restar(a, b) {
    console.log(`${a} - ${b} = ${a - b}`);
}
restar(8, 4);
restar(100, 5);

function multiplicar(a, b) {
    console.log(`${a} x ${b} = ${a * b}`);
}
multiplicar(8, 4);
multiplicar(100, 5);

function dividir(a, b) {
    console.log(`${a} / ${b} = ${a / b}`);
}
dividir(8, 4);
dividir(100, 5);

function modulo(a, b) {
    console.log(`${a} % ${b} = ${a % b}`);
}
modulo(8, 4);
modulo(100, 5);

function potencia(a, b) {
    console.log(`${a} ^ ${b} = ${a ^ b}`);
}
potencia(8, 4);
potencia(100, 5);
