// >=IE5
import angular from "angular";
console.log("angular: ", angular);
import hello from "./components/hello";

const ngModule = angular.module("app", []);

console.log(ngModule);

hello(ngModule);

var promise = Promise.resolve("ok");
console.log(promise);
promise.then(function (res) {
  console.log(res);
});

var str = "Hello world";
console.log('str.endsWith("world"): ', str.endsWith("world"));
