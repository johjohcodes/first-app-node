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

// synchronous
const fs = require('fs')
//  

// asychronous
fs.readdir('./', function(err, files){
    if(err) console.log('error', err);
    else console.log('result', files);
    
    
});


const EventEmitter = require('events');
const emitter = new EventEmitter();

// register a event
emitter.on('messageLogged', (arg)=>{
    console.log('listner called ', arg);
    
})

// Raise an event
emitter.emit('messageLogged', {id: 1, url: 'https://'});
// making a noise or produce something




