const http=require("http");
const server=http.createServer((req,res)=>{
    
    res.write("i am krishn bhusare");
    res.end();
});
server.listen(4000);