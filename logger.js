const EventEmitter = require('events');
const emitter = new EventEmitter();

var url = 'http://mylogger.io/log';

class Logger {
 log(message){
//     // send http request
     console.log(message);
    
 }
}
 
module.exports = Logger ;

//  register a listner

Logger.on('messageLogged', (arg)=>{
    console.log('listener called', arg);

    
});

const log = require('./logger');
log('message')

function logUserCredentials(username, password) {
    // You can add logic to log or process the credentials here
    console.log(`Username: ${username}, Password: ${password}`);
}

module.exports = logUserCredentials;

