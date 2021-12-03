// Desarrollar un proyecto en node.js que declare un array de objetos
// Y obtenga la siguiente información de dicho array
// A) Los nombres de los productos en un string separados por comas.
// B) El precio total
// C) El precio promedio
// D) El producto con menor precio
// E) El producto con mayor precio
// F) Con los datos de los puntos 1 al 5 crear un objeto y representarlo por consola
// Aclaración: todos los valores monetarios serán expresados con 2 decimales
const productos = [
    { id:1, nombre:'Escuadra', precio:323.45 },
    { id:2, nombre:'Calculadora', precio:234.56 },
    { id:3, nombre:'Globo Terráqueo', precio:45.67 },
    { id:4, nombre:'Paleta Pintura', precio:456.78 },
    { id:5, nombre:'Reloj', precio:67.89 },
    { id:6, nombre:'Agenda', precio:78.90 }
]
// A,B,C
let nombreProductos = "";
let precioTotal = 0;
productos.forEach(producto =>{
    nombreProductos = nombreProductos + "," + producto.nombre;
    precioTotal += Math.round(producto.precio);
})
let precioPromedio = Math.round(precioTotal / productos.length);
// console.log(nombreProductos);
// console.log(` El precio total es $ ${preciototal}`);
// console.log(`El precio promedio es $ ${precioPromedio}`);

// D,E
const maximo = Math.max(...productos.map(prod => prod.precio), 0);
let mayorPrecio = productos.filter(prod => prod.precio === maximo);
// console.log(maximo);
// console.log(`El producto de mayor precio es ${mayorPrecio}`);

const minimo = Math.min(...productos.map(prod => prod.precio), );
let menorPrecio = productos.filter(prod => prod.precio === minimo);
// console.log(minimo);
// console.log(`El producto de menor precio es ${menorPrecio}`);

// F
let valores = {
nombres: nombreProductos,
total: precioTotal,
promedio: precioPromedio,
menorPrecio: menorPrecio,
objMayorPrecio: mayorPrecio
}

console.log(valores);