/** Objetos y JSON -> Javascript Object Notation*/

/** Declarar un objeto JSON */

let curso = {
  titulo: "Curso profesional de JS",
  formato: "video",
  bloques: ["Introducción", "Funciones"],
  inscribir: function(){
    console.log("inscrito");
  }
}

//Imprimir valores
console.log(curso.titulo);
console.log(curso["titulo"]);

//Ejecutar la función dentro del objeto
curso.inscribir();

//Asignar un nuevo valor a la variable dentro del objeto
curso.titulo = "Nuevo título";

console.log(curso.titulo);

//Sobreescribir la función dentro del objeto
curso["inscribir"] = function(){ "inscribir v2"};

curso.inscribir();

