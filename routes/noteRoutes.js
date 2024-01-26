const express = require('express');
const { createNote, getAllNotes, getSingleNote, updateNote, deleteNote } = require('../controllers/noteController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/add', createNote)
router.get('/all', getAllNotes);
router.get('/:id', getSingleNote); 
router.put('/update/:id', updateNote);
router.delete('/delete/:id', deleteNote);

module.exports = router;
