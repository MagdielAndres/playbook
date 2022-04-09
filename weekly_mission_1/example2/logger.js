// logger.js

// Esta es una funci¢n que se guardara en este m¢dulo como info
exports.info = (message) => {
  console.log(`info: ${message}`)
}

// Esta es una funci¢n que se guardara en este m¢dulo como verbose
exports.verbose = (message) => {
  console.log(`verbose: ${message}`)
}

/*
  const logger = require('./logger')
  logger.info('This is an informational message')
  logger.verbose('This is a verbose message')
 * */
