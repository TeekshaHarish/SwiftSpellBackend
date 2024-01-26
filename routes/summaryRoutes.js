const express = require('express');
const { summarizeText } = require('../controllers/summaryController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post("/", summarizeText);
router.get("/", (req,res)=>{
    res.send("This is summary page")
});

module.exports = router;
