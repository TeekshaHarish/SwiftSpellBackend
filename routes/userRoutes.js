const express = require('express');   
const { registerUser, loginUser } = require('../controllers/userController');

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get('/register',(req,res)=>{
    res.send("Hello register page hai ye");
})
router.get('/login',(req,res)=>{
    res.send("Hello login page hai ye");
})

module.exports = router;