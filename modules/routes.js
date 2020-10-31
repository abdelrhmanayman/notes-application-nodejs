const router = require('express').Router();
const noteRoutes = require('./note/note.routes');
const userRoutes = require('./user/user.routes');
const imagesRoutes = require('./images/images.routes');

router.use('/api/note', noteRoutes);
router.use('/api/user', userRoutes);
router.use('/api/images', imagesRoutes);

module.exports = router;