/**Arreglos */

/** Conceptos básicos */

//Los arreglos en javascript pueden contener cualquier dato de primera clase
let arreglo = ["rails", "laravel", "django",1,{}, function(){}]

console.log(arreglo);

//Para acceder a la información se hace desde el índice
console.log(arreglo[0]);

//Para asignar un nuevo valor se realiza con la expresión =
arreglo[0] = "express";

console.log(arreglo[0]);

//Para agregar un nuevo elemento a la cola del arreglo lo podemos hacer con el método push
arreglo.push(3);

console.log(arreglo);

//Para eliminar el último elemento, podemos usar el método pop

arreglo.pop();

console.log(arreglo);

//Para eliminar el primer elemento del arreglo, podemos usar shift

arreglo.shift();

console.log(arreglo);



//También podemos asignar el elemento eliminado a una variable

let eliminado = arreglo.shift();

console.log(eliminado);

//Asignar a una variable el resultado del método push o unshift, retorna la nueva longitud del array

let resultado = arreglo.push(10);

console.log(resultado);

//Para agregar elementos al inicio del array, podemos usar el método unshift

arreglo.unshift(4,5);
console.log(arreglo);

//Asignar el resultado de unshift a una variable retorna la longitud


