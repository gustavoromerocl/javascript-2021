/**Arreglos */

/** Spread (expansion) y rest (unificar) syntax*/

/*Spread Syntax (...)
 
  El spread syntax expande o destructura un array en elementos individuales
*/



let arreglo = [1,2,3];
let nombre = "Gustavo";

console.log(arreglo); //imprime la colección
console.log(...arreglo); //imprime los elementos que contiene el array por separado (ej: console.log(1,2,3))

console.log(nombre);
console.log(...nombre);


/**Rest parameters (...) */

//Los rest paramaters son el opuesto de la spread syntax y se utiliza en la definición de los parametros de una función
//Su utilidad es unificar elementos individuales en un array

//Ejemplo 1
function demo(...arg){
  console.log(arg); //Convierte los argumentos recibidos en un array
}

demo(10,3); // [ 10, 3 ]

//Ejemplo 2 

function promedio(nombre, ...calificaciones){
  //console.log(arguments); Rest funciona similar a arguments, la diferencia es que este es un objeto y no anida los elementos en un array
  console.log(nombre, calificaciones); //Es posible pasar otros argumentos que no se añadiran a la colección generada, el rest operator se debe pasar como último argumento
}

promedio("Gustavo", 7, 7, 7);
