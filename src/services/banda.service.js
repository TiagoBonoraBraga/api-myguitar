const Banda = require('../models/Banda');


const findAllBandasService = async () => {
  const allBandas = await Banda.find();
  return allBandas;
};

const findByIdBandaService = async (idParam) => {
  const oneBanda = await Banda.findById(idParam);
  return oneBanda;
};

const createBandaService = async (newBanda) => {
  const createdBanda = await Banda.create(newBanda);
  return createdBanda; 
};

const updateBandaService = async (idParam, editBanda) => {
  const updateBanda = await Banda.findByIdAndUpdate(idParam, editBanda).setOptions({ returnOriginal: false});
  return updateBanda;
};

const deleteBandaService = async (idParam) => {
  return await Banda.findByIdAndDelete(idParam);
};

module.exports = {
  findAllBandasService,
  findByIdBandaService,
  createBandaService,
  updateBandaService,
  deleteBandaService,
};
