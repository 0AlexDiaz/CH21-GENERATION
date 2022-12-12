


/* 1.- Escribir una función que tome un arreglo de números y devuelva el número mayor de la lista.
Ejemplo del arreglo : [3, 5, 7, 1, 6]*/

let numeros  = [3, 5, 7, 1, 6];
let maximo = Math.max(numeros);
console.log(maximo);
// pregunta ¿porque el codigo en lugar de imprimir el numero mas alto, imprime NaN?

/////////////////////////////////////////

let arreglo = [3, 5, 7, 1, 6];
let max = arreglo.reduce(function(a, b) {
    return Math.max(a, b);
});
console.log (max);




/* 2.- María llega a su entrevista de trabajo para el rol de
Desarrollador Junior y se le pide que resuelva este problema:
Dada una lista de números [-1, 3, 4, 2, 6], escribe una función
en javascript para calcular el número más pequeño.*/

let num_maria = [-1, 3, 4, 2, 6];
let minimo = num_maria.reduce(function(a, b) {
    return Math.min(a, b);
});
console.log (minimo)

/* 3.-Escribir una función que permita saber si un número se repite
dentro de un arreglo.

Caso 1: Resultado esperado:
    El número 5 se encuentra más de una vez
    [1, 22, 5, 17, 10, 5, 40, 5]

Caso 2: Resultado esperado:
    El número 7 se encuentra más de una vez
    [7, 41, 5, 7, 10, 13, 2]

Caso 3: Resultado esperado:
    No hay números repetidos
    [1, 22, 5, 14, 24, 31, 27, 15, 105]
*/

let arreglo1 = [1, 22, 5, 17, 10, 5, 40, 5];

let busqueda = (arreglo1, callback) => {
    let variable = 0;
    let contador = 0;
    let cuenta = 0;
    arreglo1.map(p => {
        cuenta = 0
        arreglo1.map(x => {
            if (p == x) { cuenta++ }
        })
        if (cuenta > contador) {
            contador = cuenta;
            variable = p;
        }
    });
    callback(`Numero mas repetido:${variable}, Numero de veces: ${contador}`)

}

busqueda(arreglo1, (respuesta) => {
    console.log(` ${respuesta}`)
});

/* 4.- Escribir una función que tome un arreglo ordenado
y devuelva un arreglo completamente desordenado*/

let barajear = [1, 2, 5, 14, 24, 31, 50, 105];
console.log(barajear.sort(()=>Math.random()-0.5));


