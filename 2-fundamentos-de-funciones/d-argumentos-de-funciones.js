/**Fundamentos de funciones */

/** Argumentos de función*/

//El parametro es el que declaramos en la función
//Los parametros no tiene un tipo de dato definido
//En la declaración de parametro es posible asignar un valor por defecto, en caso de que no se reciba un argumento se usará dicho valor
function cuadrado(numero=20){ //En este caso es número 
  return numero * numero;
}

//Los parametros con valores por default deben ir al final de la declaración para evitar conflictos de asignación
function saludar(apellido, nombre="Gustavo"){
  console.log(nombre, apellido);
}

saludar("Romero");
//El argumento es el que enviamos cuando ejecutamos la función
//Los argumentos llenas los parametros
//Javascript no valida la cantidad de argumentos que se envían a una función
cuadrado(2); //en este caso es 2

//Las funciones contienen dentro de sus props el objeto un array con los argumentos recibidos por la función
//Este arreglo se puede usar para funciones que reciban argumentos y que tengan o no definido parametros en su declaración
function sumaTodos(){
  console.log(arguments); 

  let suma = 0;

  for(let i=0; i < arguments.length; i++){ suma += arguments[i]};

  console.log(suma);
}

sumaTodos(1,2,3,4);
