const router = require('express').Router();
const { createNoteController, getUserNotesController, updateNoteController, deleteNoteController } = require('./controllers');
const { createNoteValidation, getUserNotesValidation, updateNoteValidation, deleteNoteValidation } = require('./validation');
const { isUserNoteOwner } = require('./middlewares');
const { validator, authentication } = require('../../middlewares');

router.post('/create', authentication, validator({ bodySchema: createNoteValidation }), createNoteController);
router.get('/', authentication, validator({ paramsSchema: getUserNotesValidation }), getUserNotesController);
router.patch('/update', authentication, validator({ bodySchema: updateNoteValidation }), isUserNoteOwner, updateNoteController);
router.delete('/delete/:noteID', authentication, validator({ paramsSchema: deleteNoteValidation }), isUserNoteOwner, deleteNoteController);

module.exports = router;