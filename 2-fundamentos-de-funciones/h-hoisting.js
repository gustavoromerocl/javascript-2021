/**Fundamentos de funciones */

/** Hoisting*/

/* En variables y funciones es posible declarar su inicialización despues de ejecutarlas o llamarlas.
Javascript de forma interna genera el orden lógico. No obstante, se recomienda primera declararlas y posteriormente usarlas. */

console.log(suma(10,10)); //La impresion no genera error a pesar de que la función suma esta siendo llamada antes de ser declarada.

function suma(a,b){ return a + b };