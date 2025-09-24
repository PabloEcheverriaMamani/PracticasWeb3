// 14. Promesa convertida en callback
function promesaToCallback(promise, callback) {
  promise.then(result => callback(null, result)).catch(err => callback(err));
}
promesaToCallback(Promise.resolve("Listo"), (err, res) => {
  if (err) console.error(err);
  else console.log(res);
});