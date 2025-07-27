const express=require('express')
const router=express.Router();
const {mailapi}=require('../controllers/mailapi')
router.post('/contact',mailapi);

module.exports=router;