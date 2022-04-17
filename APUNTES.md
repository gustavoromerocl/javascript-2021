# javascript-2021

## Sintaxis

nvm install --version de node -> instala una versión de node
nvm use --version de node -> usa la versión indicada
nvm ls -> Lista las versiones instaladas

## Conceptos básicos

### como es el lenguaje técnicamente

Javascript es un lenguaje interpretado, a diferencia de lenguajes como c# o java que son compilados, es decir que son ejecutados en tiempo de compilación. Javascript funciona en tiempo de ejecución, por lo que sí hay un error en el código, este no afectará la ejecución del programa hasta que se acceda a dicho recurso, a diferencia de un lenguaje compilado, que justamente en el proceso de compilación detecta los errores de código.

Javascript es un lenguaje débilmente y dinámicamente tipado, es decir que no tiene mayores exigencias a la hora de definir los tipos de variables, estos son asignados de forma dinámica. También es sensible al uso mínusculas y mayúsculas

### Qué son las variables y las constantes

Las variables son valores que tiene un indetificador y su valor puede cambiar constatemente. Las constantes también almacenan valores, sin embargo el valor de estas no cambia.

### Números y operaciones aritméticas

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math

### Tipos de datos

string -> String() 
number -> Number()
boolean -> Boolean()
undefined -> Symbol()
symbol
null

BigInt()

### Coersión de tipos

Conversión del tipo de dato realizada de forma implícita por javascript, se recomienda hacer explícitamente para evitar interpretaciones erroneas.

### Booleanos

Expresiones que retornan false: undefined, NaN, null, -0, 0, "", false

### Truthy y Falsy

En JavaScript y a lo largo del curso me escucharás usar dos conceptos que de hecho son bastante divertidos de pronunciar, los valores Truthy y Falsy.

Decimos que un valor es Falsy cuando su representación booleana es falso, como mencioné en el tema anterior, los valores Nan, null, 0, -0, “”, y false son los considerados falsy.

Los valores truthy por su parte, son todos aquellos que no sean falsy, es decir que su representación booleana sea verdadero.

En muchos contextos del lenguaje, decir que retorna verdadero o falso no es correcto si no están retornando un booleano, por eso solemos usar las expresiones truthy para referrnos a cualquier valor verdadero, no solamente true, y falsy, para referirnos a cualquier valor falso, no solamente false.

Cuando el intérprete necesita saber si un valor es truthy o falsy hace un proceso llamado type coercion, del que hablaremos más adelante, que en términos simples significa que hará una conversión implícita, si lo simplificamos más significa que el lenguaje convertirá el valor a verdadero para evaluar si es truthy o falsy. Esta conversión es, digamos, momentánea, el valor original o la variable no cambian su valor, javaScript sólo obtendrá su representación booleana para saber si es truthy o falsy, sin modificar el valor original.

### Operadores de comparación

8 operadores de comparación:

== Igual 
=== Estrictamente igual
!= Desigual
!== Estrictamente desigual

x > y Mayor que
x <  y menor que
>= Mayor o igual que
<= Menor o igual que

### Operadores lógicos

4 operadores lógicos

&& operador AND
|| operador OR
! NOT
?? Operador Nullish Coalescing - Fusión de nulos

### Condiciones

IF
IF ELSE
IF ELSE IF

### Ciclos
for, for each, while, do while, case
break termina la ejecución / continue salta a la siguiente iteración

### Undefined, null y NaN

typeof -> retorna el tipo de dato

undefined -> si la variable no existe, ni ha sido inicializada su tipo de dato será undefined;
null -> es de tipo objeto por lo que es asignable a otras variables
NaN ->  indica que el resultado de una operación no es número
infinity -> indica que el valor obtenido es infinito

## Fundamentos de funciones

### Introducción a las funciones

### El scope o alcance

**Scope global:**
Si se declara una variable fuera de una función o bloque de código esta sera asignada al scope global,
es decir, que podrá ser accedida desde cualquier parte del código.

**Scope local:**
El scope local restringe el acceso a la información fuera de el bloque de código

### Alcance de función y de bloque

El alcance de bloque es el que esta en la estructura de control if, que podría ser cualquier otra
Las variables declaradas con var tienen alcance de función, incluso estando dentro de un bloque puedes ser accedidas (Alcance de la función mas próxima)
Las variables declaradas con let y const tienen alcance de bloque, es decir que solo tiene alcance dentro del bloque aunque este dentro de una función (Alcance del bloque más próximo)

### Argumentos de funciones

#### Parametro

- El parametro es el que declaramos en la función
- Los parametros no tiene un tipo de dato definido
- En la declaración de parametro es posible asignar un valor por defecto, en caso de que no se reciba un argumento se usará dicho valor
- Los parametros con valores por default deben ir al final de la declaración para evitar conflictos de asignación

#### Argumento

- El argumento es el que enviamos cuando ejecutamos la función
- Los argumentos llenas los parametros
- Javascript no valida la cantidad de argumentos que se envían a una función
- Las funciones contienen dentro de sus props el objeto un array con los argumentos recibidos por la función
- Este arreglo se puede usar para funciones que reciban argumentos y que tengan o no definido parametros en su declaración

### Pase por valor y por referencia

- Los argumentos enviados por valor son una copia del original, por lo que no modifican la variable (Aplica para cadenas, números, booleanos, etc)
- Los argumentos enviados como arreglo de referencia y que son modificados desde el parametro modifican su origen, por lo tanto el valor original. (aplica para objetos y arrays)

### Funciones puras 

Una función pura no produce efectos secundarios, que no genera mutaciones fuera de la función

### First class object

Los objetos de primera clase en javascript son todos aquellos que complen con las siguientes caracteristicas:

- Debe ser posible retornarlo
- Debe ser posible asignarlo a una variable
- Debe ser posible enviarlo como argumento 

Por lo tanto, variables, objetos e incluso funciones son considerdas first class objects.

#### Funcion de primera clase
Un lenguaje de programación se dice que tiene Funciones de primera clase cuando las funciones en ese lenguaje son tratadas como cualquier otra variable. 
Por ejemplo, en ese lenguaje, una función puede ser pasada como argumento a otras funciones, puede ser retornada por otra función y puede ser asignada a una variable.

### Hoisting

En variables y funciones es posible declarar su inicialización despues de ejecutarlas o llamarlas.
Javascript de forma interna genera el orden lógico. No obstante, se recomienda primera declararlas y posteriormente usarlas.

## Arreglos

### Arreglos y sus usos

Un arreglo es un grupo ordenado de bloques y cada bloque es parte del arreglo. son colecciones de dato que podemos procesar en conjunto.
- Almacena cualquier dato de primera clase, funciones, objetos, números, cadenas, booleanos e incluso otros arreglos.
- La longitud es igual a la cantidad de elementos.
- Las posiciones inician en 0.
- La última posición es la longitud menos 1. Corresponde al hecho de que las posiciones del arreglo inician en 0. A la posición se le conoce como indice
- Tipo posicional, se accede a los valores por la posición de los elementos. Cada elemento del arreglo ocupa una posición
- Los arrays no tienen longitud estática

### Conceptos básicos de los arreglos

- Los arreglos en javascript pueden contener cualquier dato de primera clase
- Para acceder a la información se hace desde el índice
- Para asignar un nuevo valor se realiza con la expresión =
- Para agregar un nuevo elemento a la cola del arreglo lo podemos hacer con el método push
- Para eliminar el último elemento, podemos usar el método pop
- Para eliminar el primer elemento del arreglo, podemos usar shift
- También podemos asignar el elemento eliminado a una variable
- Asignar a una variable el resultado del método push o unshift, retorna la nueva longitud del array
- Para agregar elementos al inicio del array, podemos usar el método unshift
- Asignar el resultado de unshift a una variable retorna la longitud

### Recorrer un arreglo

Para recorrer un arreglo se utilizan estructuras de control que realicen ciclos sobre los elementos que contiene

### Operaciones funcionales con arreglos

En versiones modernas de javaScript, los arreglos poseen una serie de métodos que nos permiten realizar operaciones para, recorrerlos, inspeccionarlos, o modificarlos.

Estas operaciones se introducen en la revisión de 2009 del lenguaje, conocida como ES5. ES5 es una de las revisiones más importantes que se han hecho al lenguaje, en parte por la introducción de estas operaciones.

Lo que tienen en común las operaciones forEach, map, reduce, filter y find, es que son métodos que puedes usar en cualquiera arreglo, y que operan a través de funciones que enviamos como argumento para estos métodos, la sintaxis la iremos destacando en vídeos individuales para cada operación.

Este tipo de trabajo adopta prácticas del paradigma de programación funcional, en el que la mayoría del código se estructura a través del uso de funciones.

El uso de las operaciones que verás en los próximos temas normalmente reduce la complejidad y lo verboso del código, es decir, lo hace más sencillo de comprender y reduce la cantidad de líneas que debes escribir para realizar una operación.

Es importante aclarar que un bloque de código no es mejor cuando es más pequeño que otro, cuando programamos debemos buscar que el código sea comprensible, no corto. Para evaluar este aspecto veamos las siguientes operaciones, ambas realizan lo mismo utilizando diferentes enfoques:

for(let i = 0;i < arreglo.length; i++){
   let element = arreglo[i];
   console.log(element);
}

arreglo.forEach(function(element){ console.log(element) });
En este escenario, además de que usar un método del arreglo hace el código más corto, e incluso lo puede resumir en una sola línea, también es más expresivo, forEach nos da un indicio de que hace el código, para cada uno de los elementos.

Veamos en los siguientes temas más detalles de cómo funcionan estas operaciones funcionales sobre arreglos.

### Recorrer un arreglo con forEach

- ForEach recibe una función que recibe como argumento el elemento que se esta iterando, también puede recibir el indice y por último el arreglo completo.
- Además se puede pasar un argumento externo al final de la funcion y que se alamacena en la propiedad this del bloque (siempre y cuando el callback no sea una función flecha)

### Modificar arreglos con map

- El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
- Map no modifica el arreglo original y retorna un nueva colección
- Al igual que foreach, map recibe 3 argumentos en el callback, elemento, indice y el arreglo completo
- También es posible pasarle un argumento al final de la declaración de la función y este puede ser accedido por la propiedad this (siempre y cuadno el callback no sea un arrow function)
- En resumen, cuando se encesita modificar todos los elementos de un array y generarlo en un nuevo podemos usar map

### Filtrar elementos con filter

- Sirve para eliminar elementos de un arreglo aplicando una condición
- Recibe un función al igual que los métodos anteriores, la que se encarga de aplicar la condición
- También recibe el indice el arreglo y el segundo argumento para this
- En conclusión, el nuevo array descarta los elementos que cumplan con la condición

### Reducir un arreglo a un solo elemento con reduce

- La función reduce en su callback recibe un acumulador que guarda el valor retornado de la iteración anterior y el elemento que se esta iterando
- El valor inicial del acumulador es undefined, para asignarle un valor se puede hacer pasandole un segundo argumento al final de la función

### Buscar elementos con un arreglo

#### IndexOF (estrict)

Retorna la posición del elemento que coincide con el valor pasado por argumento, la comparación es de caracter estricto ( === )
Si no encuentra coincidencia, el valor retornado en -1
 
#### Includes (estrict)

Valida que el elemento exista en la coleccion, con comparación estricta ( === ), si existe retorna true, si no, retorna false
Puede recibir un segundo argumento para indicar desde que posición inicia la busqueda

#### Find
  
  Find retorna el elemento que coincida con la validación enviada en el callback

#### FindIndex
  
  Find retorna el index del elemento que coincida con la validación enviada en el callback

#### Some
  
  Este método también valida que el elemento exista, pero solo retorna true o false

