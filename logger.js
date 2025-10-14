const winston = require('winston')

function youtubeLogger (){
    return winston.createLogger({
        level: 'info',
        format: winston.format.json(),
        transports: [
            new winston.transports.File({ filename:"error.log", level:"error" }),
            new winston.transports.File({ filename:"combined.log"})
        ]
    })
}

module.exports = youtubeLogger