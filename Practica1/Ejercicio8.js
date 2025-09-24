// Ejercicio #8
function ejecutarDespues(callback) {
  setTimeout(callback, 2000);
}
ejecutarDespues(() => console.log("Callback ejecutado"));