const path = require('path');

// base file name
console.log(path.basename(__filename));

// directory name path.dirname gets the directory name

console.log(path.dirname(__filename));

// getting the file extension

console.log(path.extname(__filename));

// create path object
console.log(path.parse(__filename));

// getting base
console.log(path.parse(__filename).base);

// concatenate paths
console.log(path.join(__dirname, "test", "hello.html"));

