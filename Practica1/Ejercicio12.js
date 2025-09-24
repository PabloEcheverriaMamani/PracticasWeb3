// 1Ejercicio #12
function cargarDatos(callback) {
  setTimeout(() => callback("Datos cargados"), 1000);
}
// Reescrito:
async function cargarAsync() {
  return new Promise(resolve => setTimeout(() => resolve("Datos cargados"), 1000));
}
(async () => {
  const datos = await cargarAsync();
  console.log(datos);
})();