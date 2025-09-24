// 3. Separar pares e impares
function separarNumeros(arr) {
  let obj = { pares: [], impares: [] };
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) obj.pares.push(arr[i]);
    else obj.impares.push(arr[i]);
  }
  return obj;
}
console.log(separarNumeros([1, 2, 3, 4, 5]));