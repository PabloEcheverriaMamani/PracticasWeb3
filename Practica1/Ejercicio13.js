// 1Ejercicio #13
function promesa1() {
  return new Promise(res => setTimeout(() => res("Uno"), 1000));
}
function promesa2(msg) {
  return new Promise(res => setTimeout(() => res(msg + " → Dos"), 1000));
}
async function flujo() {
  const uno = await promesa1();
  const dos = await promesa2(uno);
  console.log(dos);
}
flujo();