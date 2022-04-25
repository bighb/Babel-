// >=IE5

var fn = (num) => num + 2;
var promise = Promise.resolve('ok')
promise.then((res)=>{
    console.log(res);
})