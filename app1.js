
const express=require('express');
const app=express();
app.use((req,res,next)=>{
    console.log('first middleware');
    next();

})
app.use((req,res,next)=>{
    console.log('in the next middleware');
    res.send('<h1>this is arjun</h1>');
})
app.listen(344);
