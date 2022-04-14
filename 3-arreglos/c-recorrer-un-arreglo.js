/**Arreglos */

/** Recorrer un arreglo */

//Para recorrer un arreglo se utilizan estructuras de control que realicen ciclos sobre los elementos que contiene
 
let arreglo = [1,2,3,4];

for(let i = 0; i < arreglo.length; i++){
  let elemento = arreglo[i];
  console.log(elemento);
}

/**Recorrer invertido */

for(let i = arreglo.length - 1; i >= 0; i--){
  let elemento = arreglo[i];
  console.log(elemento);
}