
const path=require('path');
const express=require('express');


const adminRoutes=require('./routes/admin.js');
const shopRoutes=require('./routes/shop.js');
const contactusRoutes=require('./routes/contactus.js');

const app=express();
const bodyParser=require('body-parser')


app.use(bodyParser.urlencoded({extended:false}));

app.use(adminRoutes);
app.use(shopRoutes);
app.use(contactusRoutes);

app.use((req,res,next)=>{
    console.log('reched to error page')
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})



app.listen(3000);
