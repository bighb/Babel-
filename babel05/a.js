
//>=IE9
import "core-js/stable";
import "regenerator-runtime/runtime";
var promise = Promise.resolve('ok');
console.log(promise);
promise.then(function(res){
    console.log(res);
})