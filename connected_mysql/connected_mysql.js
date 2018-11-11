/**
 * @file 数据连接测试
 * @description ⚠️第一次使用 nodejs 连接 MySQL!!
 * @author jamesjianpeng <jamesjianpeng@gamil.com>
 */
var mysql = require('mysql')

/**
 * @description
 */
var options = {
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'Pj-199511',
    insecureAuth : true,
    database: 'NodeTest',
    path: '/'
}

/**
 * @description 创建链接
 */
var connection = mysql.createConnection(options)

/**
 * @description 链接mysql
 */
connection.connect()

/**
 * @description 查询 Product 基础表中的所有数据
 */
connection.query('SELECT * FROM Product', function (error, results/*, fields */) {
    if (error) throw error;
    // console.log(results)
    if (results.length) {
        results.map((item) => {
            console.log(item)
        })
    }
    // console.log(fields)
});

connection.end()