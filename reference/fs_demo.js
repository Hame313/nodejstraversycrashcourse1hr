const fs = require('fs');
const path=require('path');

// creating a folder
// fs.mkdir(path.join(__dirname,'/test'), {}, err=>{
//     if(err) throw err;
//     console.log("folder created");
// });
// create and write to file
fs.writeFile(path.join(__dirname,'/test', 'hello.txt'), "Hello world", err=>{
    if(err) throw err;
    console.log("file created and written to");
    //file append inside callback

    fs.appendFile(path.join(__dirname,'/test', 'hello.txt'), " i love node js", err=>{
        if(err) throw err;
        console.log("file created and written to");
    });
    
});


// fs.readFile(path.join(__dirname,'/test', 'hello.txt'), 'utf8', (err,data)=>{
//     if(err) throw err;
//     console.log( data);
// });

fs.rename(path.join(__dirname,'/test', 'hello.txt'),path.join(__dirname,'/test', 'helloworld.txt'), err=>{
    if(err) throw err;
    console.log('file renamed');
});