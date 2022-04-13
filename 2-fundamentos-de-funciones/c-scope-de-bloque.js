/**Fundamentos de funciones */

/** Alcance de función y de bloque*/

//El alcance de bloque es el que esta en la estructura de control if, que podría ser cualquier otra
//Las variables declaradas con var tienen alcance de función, incluso estando dentro de un bloque puedes ser accedidas (Alcance de la función mas próxima)
//Las variables declaradas con let y const tienen alcance de bloque, es decir que solo tiene alcance dentro del bloque aunque este dentro de una función (Alcance del bloque más próximo)
function hola(nombre){
  if(nombre){
    let saludo = "hola " + nombre;
    console.log(saludo);
  }
  console.log(saludo);
}

hola("Gustavo");