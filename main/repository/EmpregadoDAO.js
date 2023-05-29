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

async function deletarEmpregado(id){
    const SQL_DELETE = 'DELETE FROM empregado WHERE Empregadoid = ?';
    const con = await mysql.getConnection();
    const values =[id];
    return await con.execute(SQL_DELETE, values);
}

async function buscarEmpregado(id) {
    const SQL_SELECT_BY_ID = 'SELECT Empregadoid, nome, logradouro, cep, numero, complemento, telefone, email FROM empregado WHERE Empregadoid = ?';
    const con = await mysql.getConnection();
    const values = [id];
    return await con.execute(SQL_SELECT_BY_ID, values);
  }

  async function atualizarEmpregado(id, empregado) {
    const SQL_UPDATE = `UPDATE empregado SET nome = ?, logradouro = ?, cep = ?, numero = ?, complemento = ?, telefone = ?, email = ? WHERE Empregadoid = ?`;
    const con = await mysql.getConnection();
    const values = [empregado.nome, empregado.logradouro, empregado.cep, empregado.numero, empregado.complemento, empregado.telefone, empregado.email, id];
    return await con.execute(SQL_UPDATE, values);
  }
  

module.exports = {salvarEmpregado,listarEmpregado,deletarEmpregado, buscarEmpregado, atualizarEmpregado}