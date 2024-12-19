// 5.Crear una función que reciba dos párametros, un nombre y un apellido y retorne el nombre completo, primero el apellido y luego el nombre.
function nombreCompleto(apellido, nombre) {
    return `${apellido}, ${nombre}`;
}
let nombre = "Manuela";
let apellido = "Alvarez";
let resultado = nombreCompleto(apellido, nombre);
console.log(resultado);
