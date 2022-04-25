# Babel学习笔记
这是[Babel教程 - 姜瑞涛的官方网站](https://www.jiangruitao.com/babel/)配套的代码。

在教程里转码命令大部分使用`npx babel main.js -o compiled.js`进行的，下载本项目代码后，除了可以用该命令进行转码，也可以在相应的例子文件夹下执行`npm install`命令安装`npm`包后，使用`npm run dev`进行转码。在`package.json`文件里`，npm run dev`指向了`npx babel main.js -o compiled.js`命令。

### Babel转换分为两种

- **语法转换**

  把`ES6`的箭头函数语法转换成了`ES5`的函数定义语法。 箭头函数语法、`async`函数语法、`class`定义类语法和解构赋值等等都是ES6新增的语法,因为Babel默认只转换新的`JavaScript`语法（`syntax`），而不转换新的 `API`。  示例：`Bable01`
  
- **补齐`API`**

  通过 `Polyfill` 的方式在目标环境中添加缺失的特性 。新的`API`分类两类，一类是`Promise、Map、Symbol、Proxy、Iterator`等全局对象及其对象自身的方法，例如`Object.assign，Promise.resolve`；另一类是新的实例方法，例如数组实例方法`[1, 4, -5, 10].find((item) => item < 0)` , `API`转换需要引入`polyfill`。示例：`Bable02` 
  
  

### Babel版本

  目前，前端开发领域使用的Babel版本主要的Babel6和Babel7这两个版本。

- Babel7

  ```
  包的安装名字：@babel/cli、@babel/core
  ```

- Babel6

  ```
  包的安装名字：babel-cli，babel-core
  ```

### Babel配置文件

#### 配置文件

Babel的配置文件是Babel执行时默认会在当前目录寻找的文件，他们的配置项都是相同，作用也是一样的，只需要选择其中一种。主要有以下文件类型：

- .babelrc

  ```json
   {
      "presets": ["es2015", "react"],
      "plugins": ["transform-decorators-legacy", "transform-class-properties"]
   }
  ```

- .babelrc.js ,babel.config.js

  ```javascript
  module.exports = {
      "presets": ["es2015", "react"],
      "plugins": ["transform-decorators-legacy", "transform-class-properties"]
  }
  ```

- package.json

  ```json
  {
      "name": "demo",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "author": "",
      "babel": {
        "presets": ["es2015", "react"],
        "plugins": ["transform-decorators-legacy", "transform-class-properties"]
      }
   }
  ```

#### 插件与预设

**plugin**代表插件，**preset**代表预设，它们分别放在`plugins`和`presets`，每个插件或预设都是一个`npm`包。

### Babel预设与插件的选择

#### preset预设的选择

Babel7.8官方的插件和预设目前有100多个，Babel官方的preset，我们实际可能会用到的其实就只有4个：

- @babel/preset-env

- @babel/preset-flow

- @babel/preset-react

- @babel/preset-typescript

  一个普通的vue工程，Babel官方的preset只需要配一个**@babel/preset-env**就可以了。

#### plugin插件的选择 

虽然Babel7官方有90多个插件，不过大半已经整合在@babel/preset-env和@babel/preset-react等预设里了，我们在开发的时候直接使用预设就可以了。

- @babel/plugin-transform-runtime