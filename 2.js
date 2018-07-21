/**
 * 2.
 *      ES6标准:
 *          1. 'module'成为标准
 *          2. 以'export'指令导出接口
 *          3. 以'import'指令引入模块
 * 
 *      Nodejs 采用的是CommonJS规范:
 *          1. 同样是'module'为标准
 *          2. 使用module.exports导出接口
 *          3. 使用require引入模块
 * 
 *      为什么要采取这些标准:
 *          最主要的目的:
 *              解决变量污染问题,每个模块具有独立空间,互不干扰
 */

var s = 'Hello';

function hello(name) {
    console.log(s + ', ' + name + '!');
}

// hello('Alex');

// 每个js文件
module.exports = hello;

// 查看当前module
// console.info(module);