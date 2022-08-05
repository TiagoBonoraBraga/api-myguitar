const router = require('express').Router();
const controllerBandas = require('../controllers/banda.controller');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');

const {
  validId,
  validObjectBody,
} = require('../middlewares/banda.middleware');

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

router.get('/all-bandas', controllerBandas.findAllBandasController);
router.get(
  '/one-banda/:id',
  validId,
  controllerBandas.findByIdBandaController,
);
router.post(
  '/create-banda',
  validObjectBody,
  controllerBandas.createBandaController,
);
router.put(
  '/update-banda/:id',
  validId,
  validObjectBody,
  controllerBandas.updateBandaController,
);
router.delete(
  '/delete-banda/:id',
  validId,
  controllerBandas.deleteBandaController,
);

module.exports = router;
