const mongoose = require('mongoose'); 
const bandasService = require('../services/banda.service'); 

const findAllBandasController = async (req, res) => {
  const allBandas = await bandasService.findAllBandasService(); 

  if (allBandas.length == 0) {
    return res.status(404).send({ message: 'Não existe banda cadastradas!' });
  }

  res.send(allBandas);
};

const findByIdBandaController = async (req, res) => {
  const idParam = req.params.id; 
  const chosenBanda = await BandasService.findByIdBandaService(idParam); 

  if (!chosenBanda) {
    return res.status(404).send({ message: 'Banda não encontrada!' });
  }

  res.send(chosenBanda);
};

const createBandaController = async (req, res) => {
  const banda = req.body;
  const newBanda = await bandasService.createBandaService(banda);
  res.status(201).send(newBanda);
};

const updateBandaController = async (req, res) => {
  const idParam = req.params.id;
  const editBanda = req.body;
  const updatedBanda = await bandasService.updateBandaService(
    idParam,
    editBanda,
  );
  res.send(updatedBanda);
};

const deleteBandaController = async (req, res) => {
  const idParam = req.params.id;
  await bandasService.deleteBandaService(idParam);
  res.send({ message: 'Banda deletada com sucesso!' });
};

module.exports = {
  findAllBandasController,
  findByIdBandaController,
  createBandaController,
  updateBandaController,
  deleteBandaController,
};
