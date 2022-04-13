/**Fundamentos de funciones */

/** El scope o alcance */

/**Scope global: 
 * Si se declara una variable fuera de una función o bloque de código esta sera asignada al scope global,
 * es decir, que podrá ser accedida desde cualquier parte del código.
*/

let nombre = "Gustavo";

decirHola();

//El scope global genera que al llamar a la función, la variable nombre sea reescrita
console.log(nombre);

function decirHola(){
  nombre = "Cody";
  console.log("Hola " +  nombre);
}

/**Scope local:
 * El scope local restringe el acceso a la información fuera de el bloque de código
*/

//Si declaramos una variable con el mismo nombre que la anterior, no genera inconvenientes dentro de la función
//esto se debe a que el interprete de js crea un scope especifico para función que es destruido una vez que termina su ejecucion
function decirAdios(){
  let firstName = "Gustavo";
  console.log("Chao " +  firstName);
}

decirAdios();

//El alcance de la variable firstName es solo dentro de la función decirAdios por que nos va a arrojar un error
console.log(firstName);


