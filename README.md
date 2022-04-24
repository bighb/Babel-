# Babel学习笔记
这是[Babel教程 - 姜瑞涛的官方网站](https://www.jiangruitao.com/babel/)配套的代码。

在教程里转码命令大部分使用`npx babel main.js -o compiled.js`进行的，下载本项目代码后，除了可以用该命令进行转码，也可以在相应的例子文件夹下执行`npm install`命令安装`npm`包后，使用`npm run dev`进行转码。在`package.json`文件里`，npm run dev`指向了`npx babel main.js -o compiled.js`命令。

### Babel转换分为两种

- **语法转换**

  ```javascript
  把ES6的箭头函数语法转换成了ES5的函数定义语法。 箭头函数语法、async函数语法、class定义类语法和解构赋值等等都是ES6新增的语法,因为Babel默认只转换新的JavaScript语法（syntax），而不转换新的 API。  例如Bable01
  ```

- **补齐API**

  ```javascript
  通过 Polyfill 的方式在目标环境中添加缺失的特性 。新的API分类两类，一类是Promise、Map、Symbol、Proxy、Iterator等全局对象及其对象自身的方法，例如Object.assign，Promise.resolve；另一类是新的实例方法，例如数组实例方法[1, 4, -5, 10].find((item) => item < 0) , API转换需要引入polyfill。示例Bable02 
  ```

  