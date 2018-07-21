/* 
    5. 引入第三方模块
        以mysql为例;
*/

// 引入mysql
var mysql = require('mysql');

// 获取连接
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'test'
});

// 创建连接
connection.connect();

// 执行sql;
connection.query('SELECT * from user', function (error, results, fields) {
    if (error) throw error;
    // 获取结果;
    console.log(results);
    console.log("==========================>");
});

console.info(module);