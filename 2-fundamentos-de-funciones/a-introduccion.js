/**Fundamentos de funciones */

/**Introducción a las funciones */

//NOTA: La declaración de función puede ser llamada incluso antes de ser declarada,
//      a diferencia de la expresión de función que nos arrojaria un error

saludar()

// Declaración de función 
function saludar(){
  return console.log("Hola dev");
}

//Si no declaramos la palabra return la función no retorna nada por lo tanto su resultado es undefined
//Además representa el fin de la función, es decir el código que se se escriba despues de return no se ejecutará
function cuadrado(numero){
  return numero * numero;
}

let cuadrado_de_dos = cuadrado(2);
console.log(cuadrado_de_dos);

saludar();


//Expresión de función
let func = function(){}




