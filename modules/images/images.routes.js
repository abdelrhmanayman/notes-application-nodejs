const router = require('express').Router();
const { multerMiddleware } = require('../../middlewares');
const { imagesUploadController, imageServeController } = require('./controllers');
const { serveImagesValidation } = require('./validation');
const { validator } = require('../../middlewares');

router.post('/upload', multerMiddleware(), imagesUploadController);
router.get('/:imagePath', validator({ paramsSchema: serveImagesValidation }), imageServeController);

module.exports = router;