// 15. Callback convertida en promesa
function sumarCallback(a, b, callback) {
  callback(null, a + b);
}
function sumarPromesa(a, b) {
  return new Promise((res, rej) => {
    sumarCallback(a, b, (err, result) => err ? rej(err) : res(result));
  });
}
sumarPromesa(2, 3).then(console.log);