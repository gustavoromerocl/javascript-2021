/**Arreglos */

/** Modificar arreglos con map*/

//El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
//Map no modifica el arreglo original y retorna un nueva colección
//Al igual que foreach, map recibe 3 argumentos en el callback, elemento, indice y el arreglo completo
//También es posible pasarle un argumento al final de la declaración de la función y este puede ser accedido por la propiedad this (siempre y cuadno el callback no sea un arrow function)
//En resumen, cuando se encesita modificar todos los elementos de un array y generarlo en un nuevo podemos usar map
let numeros = [1,2,3,4,5]

/**
 * Ejemplo 1:
 * Generar un nuevo arreglo con el cuadrado de cada numero
 */

let cuadrados = [];

//Usando ciclo for
for(let i = 0; i < numeros.length; i++){
  cuadrados[i] = numeros[i] * numeros[i];
}
console.log(cuadrados);


//Usando MAP

let cuadradosMap = numeros.map(function(element, index, arreglo){
  //console.log(element, index, arreglo);
  console.log(this);
  return element * element;
}, ["Soy el segundo argumento"]);

console.log(cuadradosMap);

/**Ejemplo 2: 
 * Convertir arreglo de string en enteros
*/

let enteros = ["10","5","4","3"];

let parseEnteros = enteros.map(function(element){
  return parseInt(element); 
})

console.log(enteros);
console.log(parseEnteros);
