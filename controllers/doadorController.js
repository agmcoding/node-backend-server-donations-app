const doadorModel = require('../models/doadorModel');

class DoadorController {
  
  buscar(idDoDoador) {
    const promiseDoador = doadorModel.buscarDoador(idDoDoador);
    return promiseDoador;
  }

  buscar(emailDoDoador, senhaDoDoador) {
    const promiseDoador = doadorModel.buscarDoador(emailDoDoador, senhaDoDoador);
    return promiseDoador;
  }

  criarDoador(novoDoadorJSON) {
    const promiseResult = doadorModel.adicionarDoador(novoDoadorJSON);
    return promiseResult;
  }

  editarDoador(id_do_doador, doadorEditadoJSON) {
    const promiseDoadorAtualizado = doadorModel.editarDoador(id_do_doador, doadorEditadoJSON)
    return promiseDoadorAtualizado;
  }
}

module.exports = new DoadorController();