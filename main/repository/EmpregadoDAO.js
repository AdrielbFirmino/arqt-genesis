const mysql = require('../infra/db/mysqldb');

async function salvarEmpregado(empregado){
    const SQL_INSERT = `insert into empregado(nome,logradouro,cep,numero,complemento,telefone,email) values (?,?,?,?,?,?,?)`;
    const con = await mysql.getConnection();
    const values =[empregado.nome,empregado.logradouro,empregado.cep,empregado.numero,empregado.complemento,empregado.telefone,empregado.email];
    return await con.execute(SQL_INSERT,values);

}

async function listarEmpregado(){
    const SQL_SELECT = 'select Empregadoid,nome,logradouro,cep,numero,complemento,telefone,email from empregado';
    const con = await mysql.getConnection();
    return await con.execute(SQL_SELECT);
}

module.exports = {salvarEmpregado,listarEmpregado}