const fs=require('fs');



const requestHandler=(req,res)=>{
     const url=req.url;
     const method=req.method;
     if(url=='/'){
        res.write('<html>');
        res.write('<body><form action="/massege" method="POST"><input type="text" name="massege"><button type="submit">send</button></form></body>');
        res.write('</html>');
        return res.end();
     }
     if(url=='/massege' && method=='POST'){
        const body=[];
        req.on('data',(chunk)=>{
            body.push(chunk);
        });
        return req.on('end',()=>{
            const parsedBody=Buffer.concat(body).toString();
            const massege=parsedBody.split('=')[1];
            fs.writeFile('massege1.txt',massege,(err)=>{
                res.statusCode=302;
                res.setHeader('location','/');
                return res.end();
            })
        })
     }
     
}

// module.exports=requestHandler;


// module.exports={
//     handler:requestHandler,
//     Text:'program written by krish'

// }

// module.exports.handler=requestHandler;
// module.exports.Text='program written by krishna';

exports.handler=requestHandler;
exports.Text='program written by krishna';




