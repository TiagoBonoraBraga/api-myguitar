const Banda = require('../models/Banda');
const Bandas = require('../models/Banda');

const findAllBandasService = async () => {
  const allBandas = await Bandas.find();
  return allBandas;
};

const findByIdBandaService = async (idParam) => {
  const oneBanda = await Bandas.findById(idParam);
  return oneBanda;
};

const createBandaService = async (newBanda) => {
  const createdBanda = await Banda.create(newBanda);
  return createdBanda; 
};

const updateBandaService = async (idParam, editBanda) => {
  const updateBanda = await Bandas.findByIdAndUpdate(idParam, editBanda).setOptions({ returnOriginal: false});
  return updateBanda;
};

const deleteBandaService = async (idParam) => {
  return await Bandas.findByIdAndDelete(idParam);
};

module.exports = {
  findAllBandasService,
  findByIdBandaService,
  createBandaService,
  updateBandaService,
  deleteBandaService,
};
