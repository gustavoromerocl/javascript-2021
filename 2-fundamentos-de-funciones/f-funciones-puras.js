/**Fundamentos de funciones */

/** Funciones puras*/

//Una función pura no produce efectos secundarios, que no genera mutaciones fuera de la función

let arreglo = [1,2,3];
arreglo[0] = 2; //Mutación

let valor = 2;
valor += 1; //Mutación

// Ejemplo de una función pura ne base al ejercicio anterior
let edades = [20];

/* function modificador(edad){
  edad[0] = 25; 
} */

function modificador(edades){
  let copia = [...edades]; //Genero una copia
  copia[0] = 25; //Modifico la copia y no el valor original
  return copia; //Para comunicar cambios al exterior es preferible comunicarlos a través de return
}

console.log(modificador(edades)); //Motramos por consola el resultado (copia)
console.log(edades); //El valor original se mantiene