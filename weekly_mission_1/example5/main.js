const logger = require('./logger')

// Ya se puede usar directamente el objeto instanciado en el m¢dulo logger
logger.log('This is an informational message')

/*
Tambi‚n pueder instanciar uno nuevo de esta manera:
  const customLogger = new logger.constructor('CUSTOM')
  customLogger.log('This is an informational message')
*/