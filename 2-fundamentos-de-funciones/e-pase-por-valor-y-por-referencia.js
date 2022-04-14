/**Fundamentos de funciones */

/** Pase por valor y por referencia*/

//Argumento enviado por valor
let edad = 20;

function modificador(edad){
  edad = 25;
  console.log("Dentro de la función: " + edad);
}

console.log(edad);
// Los argumentos enviados por valor son una copia del original, por lo que no modifican la variable
modificador(edad);
console.log(edad);

//Argumento enviado por referencia

let edades = [20];

//Desde el parametro se accede al valor por referencia para modificar su origen
function modificador(edad){
  edad[0] = 25; 
  console.log("Dentro de la función: " + edad);
}

console.log(edades);
modificador(edades);
console.log(edades);