const express=require('express');
const path=require('path');

const rootDir=require('../util/path.js')


const router=express.Router();

router.get('/add-product',(req,res,next)=>{
    console.log('in first middleware');
    res.sendFile(path.join(rootDir,'views','add-product.html'));
});

router.post('/added',(req,res,next)=>{
  console.log('product added');
    console.log(req.body);
  res.redirect('/');
});


module.exports=router;