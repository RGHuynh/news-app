const path = require('path');
const fs = require('fs');

const pathBasename = path.join(__dirname, './')

let controllerObj = {};

fs.readdirSync(pathBasename).forEach((file) => {
    let filename = file.replace('.js', '');
    if(filename != 'index') {
        controllerObj[filename] = require('./' + filename);
    }    
})

console.log(controllerObj);
module.exports = controllerObj;