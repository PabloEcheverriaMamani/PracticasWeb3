// Ejercicio #11
function paso1() {
  return Promise.resolve("Paso 1");
}
function paso2(msg) {
  return Promise.resolve(msg + " => Paso 2");
}
paso1().then(paso2).then(console.log);