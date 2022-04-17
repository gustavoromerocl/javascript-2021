/**Arreglos */

/** Recorrer un arreglo con forEach*/

let arreglo = ["ruby", "php", "python", "javascript"];

//ForEach recibe una función que recibe como argumento el elmento que se esta iterando, también puede recibir el indice y por último el arreglo completo.
//Además se puede pasar un argumento externo al final de la funcion y que se alamacena en la propiedad this del bloque (siempre y cuando el callback no sea una función flecha)
arreglo.forEach( function(element, index, arreglo){
  console.log(element, index, arreglo);
  console.log(this);
}, "customer argument");