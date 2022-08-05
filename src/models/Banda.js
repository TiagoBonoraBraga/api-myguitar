const mongoose = require('mongoose');

const BandaSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  estilo: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  foto: {
    type: String,
    required: true,
  },
});

const Banda = mongoose.model('bandas', BandaSchema);
module.exports = Banda;
