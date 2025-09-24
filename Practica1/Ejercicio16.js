// 16. Migrar promesa a async/await
function obtenerDatos() {
  return new Promise(res => setTimeout(() => res("Datos"), 1000));
}
async function obtenerDatosAsync() {
  const datos = await obtenerDatos();
  console.log("Async/Await:", datos);
}
obtenerDatosAsync();