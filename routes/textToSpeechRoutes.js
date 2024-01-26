const express = require('express');
const { textToSpeech } = require('../controllers/textToSpeechController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post("/", textToSpeech);
router.get("/", (req,res)=>{
    res.send("This is tts route");
});

module.exports = router;
