/* 9. Crear seis funciones, (suma, resta, multiplica, divide, módulo, potencia),
 cada función debe recibir 2 números y retornar un resultado según corresponda.
Crear otra función que reciba el nombre de la operación y 2 números,
debe imprimir el resultado.
Ej entrada: suma, 8, 4
Ej salida: 8 + 4 = 12*/

function sumar(a, b) {
  return a + b;
}

let resultadoSu = sumar(8, 4);
console.log(resultadoSu); 


function restar(a, b) {
    return a - b;
  }
  
  let resultadoRe = restar(8, 4);
  console.log(resultadoRe); 

  function multiplicar(a, b) {
    return a * b;
  }
  
  let resultadoMu = multiplicar(8, 4);
  console.log(resultadoMu); 

  function dividir(a, b) {
    return a / b;
  }
  
  let resultadoDi = dividir(8, 4);
  console.log(resultadoDi); 

  function modulo(a, b) {
    return a % b;
  }
  
  let resultadoMo = modulo(8, 4);
  console.log(resultadoMo); 

  function potencia(a, b) {
    return a ** b;
  }
  
  let resultadoPo = potencia(8, 4);
  console.log(resultadoPo); 

  //9.1
  //Suma
  function ejecutar(a, b) {
   console.log(`${a} + ${b} = ${a + b}`);
  }
  ejecutar(8, 4);

  //Resta
  function ejecutar2(a, b) {
    console.log(`${a} - ${b} = ${a - b}`);
   }
   ejecutar2(8, 4);

   //Multiplicación
   function ejecutar3(a, b) {
    console.log(`${a} * ${b} = ${a * b}`);
   }
   ejecutar3(8, 4);

   //Divison
   function ejecutar4(a, b) {
    console.log(`${a} / ${b} = ${a / b}`);
   }
   ejecutar4(8, 4);

   //Módulo
   function ejecutar5(a, b) {
    console.log(`${a} % ${b} = ${a % b}`);
   }
   ejecutar5(8, 4);

   //Potencia 
   function ejecutar6(a, b) {
    console.log(`${a} ^ ${b} = ${a ** b}`);
   }
   ejecutar6(8, 4);