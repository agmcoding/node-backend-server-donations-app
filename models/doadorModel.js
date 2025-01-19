const connection = require('../dbconnection/connection');

class DoadorModel {

  buscarDoador(idDoDoador) {
    const query = `SELECT * FROM doador WHERE id = ?;`;

    return new Promise((resolve, reject) => {
      connection.query(query, [idDoDoador], (error, rows) => {
        if (error) {
          connection.end();
          reject(error);
          throw error;
        }

        resolve(rows);
      });
    });
  }

  buscarDoador(emailDoDoador, senhaDoDoador) {
    const query = `SELECT * FROM doador WHERE email = ? AND senha = ?;`;

    return new Promise((resolve, reject) => {
      connection.query(query, [emailDoDoador, senhaDoDoador], (error, rows) => {
        if (error) {
          connection.end();
          reject(error);
          throw error;
        }

        resolve(rows);
      });
    });
  }

  adicionarDoador(novoDoadorJSON) {
    const query = `INSERT INTO doador (nome, senha, email, telefone) VALUES (?, ?, ?, ?);`;
    const { nome, senha, email, telefone } = novoDoadorJSON;

    return new Promise((resolve, reject) => {
      connection.query(query, [nome, senha, email, telefone], (error, rows) => {
        if (error) {
          connection.end();
          reject(error);
          throw error;
        }

        resolve(rows);
      });
    });
  }

  editarDoador(id_do_doador, doadorEditadoJSON) {
    const query = `UPDATE doador SET nome = ?, senha = ?, email = ?, telefone = ? WHERE id = ?;`;
    const idDoDoador = id_do_doador;
    const { nome, senha, email, telefone } = doadorEditadoJSON;

    return new Promise((resolve, reject) => {
      connection.query(query, [nome, senha, email, telefone, idDoDoador], (error, rows) => {
        if (error) {
          connection.end();
          reject(error);
          throw error;
        }

        resolve(rows);
      });
    });
  }
}

module.exports = new DoadorModel();