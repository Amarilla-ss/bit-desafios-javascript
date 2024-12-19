// 6.Crear una función que reciba cuatro párametros, un nombre, una prenda, un color y una cantidad y retorne: ____ tiene __ ____ de color ____. Ej entrada: pepita, camisas, azul, 2 Ej salida: Pepita tiene 2 camisas de color azul.
function descripcion(nombre, prenda, color, cantidad) {
    return  `${nombre} tiene ${cantidad} ${prenda} de color ${color}.` ;
}
let nombre = "Juana";
let prenda = "pantalones";
let color = "verde"
let cantidad = 4;
let resultado = descripcion(nombre, prenda, color, cantidad);
console.log(resultado);