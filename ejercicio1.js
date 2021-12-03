// NUMEROS ALEATORIOS
// A- Crear un proyecto en node.js que genere 10000 números aleatorios en
// el rango de 1 a 20.
// B- Crear un objeto cuyas claves sean los números salidos y el valor
// asociado a cada clave será la cantidad de veces que salió dicho número.
// Representar por consola los resultados.

import random from 'random';
const numAleatorio = 10000
let num = new Map();
for (let index = 0; index < numAleatorio; index++) {
    let numRandom = random.int(1,20);
    console.log(numRandom);
    if(num.has(numRandom)){
        num.set(numRandom,num.get(numRandom)+1);
    }else{
        num.set(numRandom,1);
    }
}
console.log(num);

