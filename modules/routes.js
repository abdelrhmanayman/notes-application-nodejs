const router = require('express').Router();
const noteRoutes = require('./note/note.routes');
const userRoutes = require('./user/user.routes');

router.use('/api/note', noteRoutes);
router.use('/api/user', userRoutes);

module.exports = router;