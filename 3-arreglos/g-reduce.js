/**Arreglos */

/** Reducir arreglos a un solo elemento con reduce*/

/*
La función reduce en su callback recibe un acumulador que guarda el valor retornado de la iteración anterior y el elemento que se esta iterando
El valor inicial del acumulador es undefined, para asignarle un valor se puede hacer pasandole un segundo argumento al final de la función

*/
let numeros = [1,2,3,4,5];

//Ejemplo 1: sumar todos los valores

let suma = numeros.reduce(function(acc, elemento){
  return acc + elemento;
}, 0)

console.log(suma);

//Ejemplo 2: listar el arreglo en una cadena

let nombres = ["Uriel", "Cody"];

let html = nombres.reduce(function(acc, nombre){
  return acc + "<li>" + nombre + "</li>";
})
