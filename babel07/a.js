// >=IE5
var promise = Promise.resolve("ok");
console.log(promise);
promise.then(function (res) {
  console.log(res);
});
