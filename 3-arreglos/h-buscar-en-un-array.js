/**Arreglos */

/** Buscar elementos con un arreglo*/

/*IndexOF

Retorna la posición del elemento que coincide con el valor pasado por argumento, la comparación es de caracter estricto ( === )
Si no encuentra coincidencia, el valor retornado en -1
 
*/

let arreglo = ["ruby", "python", "java"];

arreglo.indexOf("ruby"); //retorna el index 

/*Includes

Valida que el elemento exista en la coleccion, con comparación estricta ( === ), si existe retorna true, si no, retorna false
Puede recibir un segundo argumento para indicar desde que posición inicia la busqueda
*/

arreglo.includes("ruby"); //retorna true o false

/** Las siguientes busquedas no son estrictas */

/*Find
  
  Find retorna el elemento que coincida con la validación enviada en el callback
*/

let resultado = arreglo.find(function(element, index, array) {
  return element == "ruby"; //retorna el elemento
});

console.log(resultado);

/*FindIndex
  
  Find retorna el index del elemento que coincida con la validación enviada en el callback
*/

let index = arreglo.findIndex(function(element, index, array) {
  return element == "java"; //retorna el elemento
});

console.log(index);

/*Some
  
  Este método también valida que el elemento exista, pero solo retorna true o false
*/

let existe = arreglo.some(function(element, index, array) {
  return element == "java"; //retorna el elemento
});

console.log(existe);