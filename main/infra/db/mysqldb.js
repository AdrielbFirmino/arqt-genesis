
async function getConnection(){
    if(global.connection && global.connection.state == 'disconnected'){
        return global.connection;
    }

    const mysql = require('mysql2/promise');

    const con = await mysql.createConnection('mysql://root:55299@localhost:3306/ecom');
    global.connection = con;
    return con;

}
module.exports = {getConnection}