const router = require('express').Router();
const { userRegisterController, userLoginController } = require('./controllers');
const { userRegisterValidation, userLoginValidation } = require('./validation');
const { validator } = require('../../middlewares');

router.post('/register', validator({ bodySchema: userRegisterValidation }), userRegisterController);
router.post('/login', validator({ bodySchema: userLoginValidation }), userLoginController);

module.exports = router;