const connection = require('../dbconnection/connection');

class DoacaoModel {

  list() {
    const query = 'SELECT * FROM doacao LIMIT 10;';

    return new Promise((resolve, reject) => {
      connection.query(query, {}, (error, rows) => {
        if (error) {
          connection.end();
          reject(error);
          throw error;
        }

        resolve(rows);
      });
    });

  }

  listDoacoesDoDoador(idDoDoador) {
    const query = `SELECT * FROM doacao WHERE id_do_doador = ?;`;

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

  buscarDoacao(idDaDoacao) {
    const query = `SELECT * FROM doacao WHERE id = ? LIMIT 10;`;

    return new Promise((resolve, reject) => {
      connection.query(query, [idDaDoacao], (error, rows) => {
        if (error) {
          connection.end();
          reject(error);
          throw error;
        }

        resolve(rows);
      });
    });
  }

  adicionarDoacao(novaDoacaoJSON) {
    const query = `INSERT INTO doacao (id_do_doador, endereco_da_coleta, detalhes_da_doacao, coleta_foi_realizada) VALUES (?, ?, ?, ?);`;
    const { idDoDoador, enderecoDaColeta, detalhesDaDoacao, coletaFoiRealizada } = novaDoacaoJSON;

    return new Promise((resolve, reject) => {
      connection.query(query, [idDoDoador, enderecoDaColeta, detalhesDaDoacao, coletaFoiRealizada], (error, rows) => {
        if (error) {
          connection.end();
          reject(error);
          throw error;
        }

        resolve(rows);
      });
    });
  }

  editarDoacao(id_da_doacao, doacaoEditadaJSON) {
    const query = `UPDATE doacao SET endereco_da_coleta = ?, detalhes_da_doacao = ?, coleta_foi_realizada = ? WHERE id = ?;`;
    const idDaDoacao = id_da_doacao;
    const { endereco_da_coleta, detalhes_da_doacao, coleta_foi_realizada } = doacaoEditadaJSON;

    return new Promise((resolve, reject) => {
      connection.query(query, [endereco_da_coleta, detalhes_da_doacao, coleta_foi_realizada, idDaDoacao], (error, rows) => {
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

module.exports = new DoacaoModel();