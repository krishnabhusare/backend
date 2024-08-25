const express=require('express');
const path=require('path');
const router=express.Router();

const rootDir=require('../util/path.js');

router.get('/contactus',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contactus.html'));
})
router.post('/success',(req,res,next)=>{
    console.log('contacted');
    res.sendFile(path.join(rootDir,'views','success.html'))
   

})

module.exports=router;
