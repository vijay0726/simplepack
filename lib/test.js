const { getAST, getDependencies, transform } = require('./parser');
const path = require('path');

const AST = getAST(path.join(__dirname, '../src/index.js'));
const dp = getDependencies(AST);

const source = transform(AST);
console.log('source',source);
// console.log('dp',dp);
// console.log(AST);


//  (function(modules) {
//       function require(filename) {
//         var fn = modules[filename]
//         var module = { exports: {} }

//         fn(require, module, module.exports)

//         return module.exports
//       }

//       require(D:\Study\技术栈学习\前端技术栈\前端工程化\simplepack\src\index.js)
//     })(./greeting.js:function (require, module, exports) { "use strict";

// Object.defineProperty(exports, "__esModule", {
//   value: true
// });
// exports.greeting = greeting;
// function greeting(name) {
//   return 'welcome' + name;
// } })