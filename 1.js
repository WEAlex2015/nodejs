/**
 * 1.
 *      nodejs 是一个可以运行javascript的运行环境,
 *      可以通过node指令 执行js文件;
 *      类似于java的jre, 可以运行所有的java程序;
 *      
 */
var s = 'Hello';

function hello(name) {
    console.log(s + ', ' + name + '!');
}

hello('Alex');