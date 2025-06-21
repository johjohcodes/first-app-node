// const logger = require("./logger");

// logger = 1;

// logger.log('message ')

const path = require('path')

var pathObj = path.parse(__filename);

console.log(pathObj);

const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

// console.log('Total memory:'+ totalMemory);

//template string 
// ES6 / Es2015 : ECMAScript 6

console.log(`Total Memory:${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);


const fs = require('fs')
const files = fs.readdirSync('./')
console.log(files);


fs.readdir('./', function(err, files){
    if(err) console.log('error', err);
    else console.log('result', files);
    
    
});



