// 1. Contar vocales
function contarVocales(texto) {
  const resultado = { a: 0, e: 0, i: 0, o: 0, u: 0 };
  for (let i = 0 ; i < texto.length; i++) {
    let letra = texto[i].toLowerCase();
    if(letra == 'a') resultado.a++;
    if(letra == 'e') resultado.e++;
    if(letra == 'i') resultado.i++;
    if(letra == 'o') resultado.o++;
    if(letra == 'u') resultado.u++;
  }
  return resultado;
}
console.log(contarVocales("Paranguaterimicuaro")); 