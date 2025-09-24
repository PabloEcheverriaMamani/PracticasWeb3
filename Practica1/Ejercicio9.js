// 9. Promesa con éxito en 3 segundos
function promesaExito() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Éxito"), 3000);
  });
}
promesaExito().then(msg => console.log(msg));