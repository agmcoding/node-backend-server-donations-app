const { Router } = require('express');
const router = Router();

const doacaoController = require('../controllers/doacaoController');

router.get('/doacao/', (request, response) => {
  const listDoacoes = doacaoController.listar();
  listDoacoes
  .then(doacoes => response.status(200).json(doacoes))
  .catch(error => response.status(500).json(error.message));
});

router.get('/doacao/:id_da_doacao', (request, response) => {
  const { id_da_doacao } = request.params;
  const resultado = doacaoController.buscarDoacao(id_da_doacao);
  resultado
  .then(doacao => response.status(200).json(doacao))
  .catch(error => response.status(404).json(error.message));
});

router.get('/doacao/doador/:id_do_doador', (request, response) => {
  const { id_do_doador } = request.params;
  const listDoacoesDoDoador = doacaoController.listarDoacoesDoDoador(id_do_doador);
  listDoacoesDoDoador
  .then(doacoes => { 
    let array = [];
    for (let i = 0; i < doacoes.length; i++) {
      array[i] = { 
        id: doacoes[i].id,
        idDoDoador: doacoes[i].id_do_doador,
        enderecoDaColeta: doacoes[i].endereco_da_coleta,
        dataDePublicacao: `${doacoes[i].data_de_publicacao}`,
        detalhesDaDoacao: doacoes[i].detalhes_da_doacao,
        coletaFoiRealizada: doacoes[i].coleta_foi_realizada 
      };
    }
    response.status(200).json(array);
  })
  .catch(error => response.status(404).json(error.message));
});

router.post('/doacao/', (request, response) => {
  const novaDoacaoJSON = request.body;
  const result = doacaoController.criarDoacao(novaDoacaoJSON);
  result
  .then(() => response.status(201).send())
  .catch(error => response.status(400).send(error.message));
});

router.put('/doacao/:id_da_doacao', (request, response) => {
  const { id_da_doacao } = request.params;
  const doacaoEditadaJSON = request.body;
  const doacaoAtualizada = doacaoController.editarDoacao(id_da_doacao, doacaoEditadaJSON);
  doacaoAtualizada
  .then(() => response.status(200).json())
  .catch(error => response.status(400).json(error.message));
});

module.exports = router;