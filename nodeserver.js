const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  fs.writeFile('sess.txt','Naresuan',(err)=>{
    if(err) throw err
    console.log('file save');

    fs.readFile('sess.txt', (err, data) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        console.log(data.toString());
        res.end('Hello Worldertretrewrefdsfdsfdsfewaregsgfd3123ds564fd6s1f23d\n'+data.toString);    

      if (err) throw err;
      console.log(data);
    });

  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});