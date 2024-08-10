const http=require('http');
const routs1=require('./routs1.js');

console.log(routs1.Text);

// const server=http.createServer(routs1);// this is for module.exports=requestHandler;
const server=http.createServer(routs1.handler);
server.listen(255);
