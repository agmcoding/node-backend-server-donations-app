const { Router } = require('express');
const router = Router();

const doadorController = require('../controllers/doadorController');

router.get('/doador/', (request, response) => {
  const { email, senha } = request.body;
  const doador = doadorController.buscar(email, senha);
  doador
  .then(informacoesDoDoador => response.status(200).json(informacoesDoDoador))
  .catch(error => response.status(404).json(error.message));
});

router.post('/doador/criardoador/', (request, response) => {
  const novoDoadorJSON = request.body;
  const result = doadorController.criarDoador(novoDoadorJSON);
  result
  .then(() => response.status(201).send())
  .catch(error => response.status(400).json(error.message));
});

router.post('/searchdoador/', (request, response) => {
  const { email, senha } = request.body;
  const result = doadorController.buscar(email, senha);
  result
  .then((informacoesDoDoador) => {response.status(200).send(informacoesDoDoador)})
  .catch(error => response.status(400).json(error.message));
});

router.put('/doador/:id_do_doador', (request, response) => {
  const { id_do_doador } = request.params;
  const doadorEditadoJSON = request.body;
  const doadorAtualizado = doadorController.editarDoador(id_do_doador, doadorEditadoJSON);
  doadorAtualizado
  .then(() => response.status(200).json())
  .catch(error => response.status(400).json(error.message));
});

module.exports = router;