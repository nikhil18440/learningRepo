const youtubeLogger = require('./logger.js')
var logger = null

if (process.env.NODE_ENV !== "production") {
  logger = youtubeLogger()
}

module.exports = logger