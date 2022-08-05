const mongoose = require('mongoose');

const validId = (req, res, next) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    
    return res.status(400).send({ message: 'Id Inválido!' });
  }
  next(); 
};

const validObjectBody = (req, res, next) => {
  const banda = req.body;
  if (
    !banda ||
    !banda.nome ||
    !banda.estilo ||
    !banda.descricao||
    !banda.foto
  ) {
    return res
      .status(400)
      .send({ message: 'Envie todos os campos da banda!' });
  }
  next();
};



module.exports = {
  validId,
  validObjectBody,
};
