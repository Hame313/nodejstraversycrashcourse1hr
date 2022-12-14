
// const Person = require ('./person')

// const person1= new Person('John doe', 30);
// console.log(person1);

// const Logger = require('./logger');

// const logger = new Logger();
// logger.on('message', (data)=>{
//     console.log('Called listener:', data);
// });

// logger.log('Hello world')

const http = require('http');
const path = require('path');
const fs = require('fs');

// const server =http.createServer((req,res)=>{
//     if(req.url === '/api/users'){
//         fs.readFile
//             (path.join(__dirname, 'public', 'about.html'),
//             (err, content)=>{
//                 if(err) throw err;
//                 res.writeHead(200, {'Content-Type': 'text/html'});
//                 res.end(content)
//         }
//         );

      
//     }
// });


// const server =http.createServer((req,res)=>{
//     if(req.url === '/api/users'){
//        const users = [
//         {name: 'bob', age:30},
//         {name:"hio", age:22}
//        ]
//        res.writeHead(200, {'Content-Type': 'application/json'});
//        res.end(JSON.stringify(users));
      
//     }
// })


// build file path 
const server =http.createServer((req,res)=>{
    let filePath=path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url );

    // extname
    let extname= path.extname(filePath);

    // initial content type
    let contentType='text/html';

    // check extension and set content type

    switch(extname){
        case '.js':
            contentType='text/javascript';
            break;
        case '.css':
            contentType= 'text/css';
        case '.json':
            contentType='application/json';
            break;
        case '.png':
            contentType='image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    // readfile

    fs.readFile(filePath, (err,content)=>{
        if(err){
            if(err.code == 'ENOENT') {
                // page not found
                fs.readFile(path.join(__dirname,'public', '404.html'),(err,content)=>{
                    res.writeHead(200, {'Content-Type': 'text/html'})
                    res.end(content, 'utf8')
                })
            } else{
                // some server error
                res.writeHead(500);
                res.end(`Server error: ${err.code}`)
            }
        }else{
            // success
            res.writeHead(200, {'Content-Type': contentType});
            res.end(content, 'utf8');
        }
    })
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
});
