// Ejercicio #7
const arreglo = [10, 20, 30, 40];
const [a, b] = arreglo;
const [, , ...resto] = arreglo;
console.log("Primeros:", a, b);
console.log("Resto:", resto);