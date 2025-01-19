const doacaoModel = require('../models/doacaoModel');

class DoacaoController {

  listar() {
    const promiseListaDoacao = doacaoModel.list();
    return promiseListaDoacao;
  }

  listarDoacoesDoDoador(idDoDoador) {
    const promiseListaDoacoesDoDoador = doacaoModel.listDoacoesDoDoador(idDoDoador);
    return promiseListaDoacoesDoDoador;
  }

  buscarDoacao(idDaDoacao) {
    const promiseResultadoDaBusca = doacaoModel.buscarDoacao(idDaDoacao);
    return promiseResultadoDaBusca;
  }

  criarDoacao(novaDoacaoJSON) {
      const promiseResult = doacaoModel.adicionarDoacao(novaDoacaoJSON);
      return promiseResult;
    }

    editarDoacao(id_da_doacao, doacaoEditadaJSON) {
      const promiseDoacaoAtualizado = doacaoModel.editarDoacao(id_da_doacao, doacaoEditadaJSON)
      return promiseDoacaoAtualizado;
    }
}

module.exports = new DoacaoController();