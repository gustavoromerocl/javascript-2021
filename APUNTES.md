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