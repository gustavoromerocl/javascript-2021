/**Arreglos */

/** Filtrar elementos con filter*/

/*
 Sirve para eliminar elementos de un arreglo aplicando una condición
 Recibe un función al igual que los métodos anteriores, la que se encarga de aplicar la condición
 También recibe el indice el arreglo y el segundo argumento para this
 En conclusión, el nuevo array descarta los elementos que cumplan con la condición

 */

 let numeros = [1,2,3,4,5];

 let withoutFour = numeros.filter(function(element, index, array){return element != 4});

 console.log(withoutFour);


