
const express=require('express');
const app=express();
const bodyParser=require('body-parser')
// app.use((req,res,next)=>{
//     console.log('first middleware');
//     next();

// })
app.use(bodyParser.urlencoded({extended:false}));
app.use('/add-product',(req,res,next)=>{
    console.log('in first middleware');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit">Add product</button></form>');
});

app.post('/product',(req,res,next)=>{
    console.log(req.body);
  res.redirect('/');
});

app.use('/',(req,res,next)=>{
    console.log('in the next middleware');
    res.send('<h1>this is krishna</h1>');
})
app.listen(344);
