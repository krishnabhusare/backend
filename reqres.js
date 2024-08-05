const http=require("http");
const server=http.createServer((req,res)=>{

   
   if(req.url=="/home"){
    res.write("welcome to home");
   }
   else if(req.url=="/about"){
    res.write("welcome to about us page");
   }
   else if(req.url=="/node"){
    res.write("welcome to my node js project");
   }
   else{
    res.write("i have done it");
   }
   res.end();
});

server.listen(4500);