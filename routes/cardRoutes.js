const express = require('express');
const { createCard, deleteCard, getAllCards } = require('../controllers/cardController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/add', createCard);
router.get('/', getAllCards);
router.delete('/delete/:id',  deleteCard);



module.exports = router;
