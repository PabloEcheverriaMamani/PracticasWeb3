// Ejercicio #5
function esPalindromo(cadena) {
  let invertida = "";
  for (let i = cadena.length - 1; i >= 0; i--) {
    invertida += cadena[i];
  }
  return cadena === invertida;
}
console.log(esPalindromo("oruro"));
console.log(esPalindromo("hola"));