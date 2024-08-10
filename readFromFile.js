const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    const url=req.url;
    const method=req.method;
    if(url=='/'){
        fs.readFile('dummy.txt',{encoding:'utf-8'},(err,data)=>{
            res.write('<html>');
            res.write(`<body>${data}</body>`);
            res.write('<body><form action="/dummy" method="POST"><input type="text" name="dummy"><button type="submit">send</button></form></body>');
            res.write('</html>');
            return res.end();
        })

        
    }
    else if(url=='/dummy',method=='POST'){
        const body=[];
        req.on('data',(chunk)=>{
            body.push(chunk);
           
        });
        return req.on('end',()=>{
            const parsedBody=Buffer.concat(body).toString();
            const dummy=parsedBody.split('=')[1];
            fs.writeFile('dummy.txt',dummy,(err)=>{
                res.statusCode=302;
                res.setHeader('location','/');
                return res.end();
            })
        })
    }
})
server.listen(200);