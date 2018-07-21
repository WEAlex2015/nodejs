/* 
    4. Nodejs 内置模块.
        a. 操作文件
            引入fs模块
*/
var fs = require('fs');

// 读文件
fs.readFile('test.txt', 'utf-8', function (err, data) {
    if (err) {
        // console.log(err);
    } else {
        console.log(data);
        console.log("=====================================>");
    }
});

// 写文件
var data = 'Hello, Node.js';
fs.writeFile('test.txt', data, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('ok.');
        console.log("=====================================>");
    }
});

// 是否存在
fs.exists('test.txt', function (exists) {
    if (exists) {
        console.log('路径存在');
        console.log("=====================================>");
    }
});

// 写入后再读文件
fs.readFile('test.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
        console.log("=====================================>");
    }
});

// 文件信息:
fs.stat('test.txt', function (err, stat) {
    if (err) {
        console.log(err);
    } else {
        // 是否是文件:
        console.log('isFile: ' + stat.isFile());
        // 是否是目录:
        console.log('isDirectory: ' + stat.isDirectory());
        if (stat.isFile()) {
            // 文件大小:
            console.log('size: ' + stat.size);
            // 创建时间, Date对象:
            console.log('birth time: ' + stat.birthtime);
            // 修改时间, Date对象:
            console.log('modified time: ' + stat.mtime);
            console.log("=====================================>");
        }
    }
});

// 删除文件
fs.unlink('test.txt', function (err) {
    if (err) return console.log(err);
    console.log('文件删除成功');
    console.log("=====================================>");
})