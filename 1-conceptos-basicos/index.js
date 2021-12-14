/**Variables y contantes en javascript */

console.log("\n\n Variables y constantes en javascript ");
let nombre = "Gustavo";

nombre = 2.2;

console.log(nombre);

const PI = 3.1416;

//PI = "gustavo" ERROR

/**Números y operaciones aritméticas */

console.log("\n\n Números y operaciones aritméticas")
// + - * / % Math.pi Math.pow Math.round Math.sqrt

/**Tipos de datos */
console.log("\n\n Tipos de datos")

console.log("20");

//Parse
console.log(Number("20"));
console.log( parseInt("200.5") );
console.log( parseFloat("200.5") );

console.log( Number(20).toString() );

/**Coersión de datos */

console.log("\n\n Coersión de datos ");

console.log(10 == "10");

console.log([] == 0);

console.log(10 + "10");
console.log(Number("10") + 10);

/* Booleanos */

console.log("\n\n Booleanos");

//Ejemplos de uso:
let notificaciones = false;
let activo = true;

//Evaluando expresiones:
let resultado = Boolean(1);
console.log(resultado);

resultado = Boolean(0);
console.log(resultado);

resultado = Boolean("false");
console.log(resultado);

resultado = Boolean("");
console.log(resultado);

/**Operadores lógicos */

console.log("\n\n Operadores lógicos ");

//El operador AND se detiene cuando se encuentra con un false y retorna la expresion, de lo contrario retorna la ultima expresion truthy
console.log("\n AND");
console.log(true && true);
console.log(false && false);
console.log(true && false);
console.log(false && true);

console.log(20 && 10);
console.log(10 && 20);
console.log(20 && 5 && false && 80);

// OR se detiene una vez que encuentra una expresion verdadera y si no encuentra niguno retorna el último falsy
console.log("\n OR");
console.log(true || true);
console.log(false || false);
console.log(true || false);
console.log(false || true);

console.log(20 || 10);
console.log(10 || 20);
console.log(20 || 5 && false && 80);

//El operador NOT invierte el resultado de la expresión booleana
console.log("\n NOT");
console.log(!true)

/* El operador de fusión nula ( ??) es un operador lógico que devuelve su operando del lado derecho 
cuando su operando del lado izquierdo es nullo undefined, y de lo contrario devuelve su operando 
del lado izquierdo. */
console.log("\n NULLISH COALISCING");

console.log(null ?? "El primer valor es nulo");

console.log("El primer valor no es nulo" ?? "hola mundo");

/** Ciclos */

console.log("\n\n CICLOS");

console.log("\nFOR con break");
for( i=0; i < 10; i++){
    if(i==5) break;
    console.log(i + 1);
}

console.log("\nFOR con continue");
for( i=0; i < 10; i++){
    if(i==5) continue;
    //se salta la ejecución, por lo tanto no imprime el resultado
    console.log(i + 1);
}

console.log("\n WHILE")
let iterador = 0;

while(iterador <= 10){
    iterador++;
    console.log(iterador);

    if(iterador==10) break;
}

console.log("\n DO WHILE");
iterador = 0;

do{
    iterador++;
    console.log(iterador);

    if(iterador==10) break;
}while(iterador <= 10);
