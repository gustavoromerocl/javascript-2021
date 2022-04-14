/**Fundamentos de funciones */

/** First class object*/

/*
Los objetos de primera clase en javascript son todos aquellos que complen con las siguientes caracteristicas:
Debe ser posible retornarlo
Debe ser posible asignarlo a una variable
Debe ser posible enviarlo como argumento 

Por lo tanto, variables, objetos e incluso funciones son considerdas first class objects.

Funcion de primera clase
Un lenguaje de programación se dice que tiene Funciones de primera clase cuando las funciones en ese lenguaje son tratadas como cualquier otra variable. 
Por ejemplo, en ese lenguaje, una función puede ser pasada como argumento a otras funciones, puede ser retornada por otra función y puede ser asignada a una variable.
*/


function executor(funcion){
  funcion();
}

function decirHola(){
  console.log("Hola");
}

executor(decirHola); //Se ignoran los parentesis de decirHola ya que la función esta siendo enviada y no ejecutada

//En este patrón se declara y retorna una función dentro de otra, es util cuando necesitamos preconfigurar una función
function build(nombre){
  function a(){console.log("Hola " + nombre)};
  return a;
}

let f = build("Tavo");

f();