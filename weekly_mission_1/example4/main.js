const Logger = require('./logger') // Invocas el m¢dulo que contiene la clase

// Creaci¢n de un objeto
const dbLogger = new Logger('DB') // Creas un objeto nuevo, esto llama por default el constructor de la clase
// invocaci¢n del m‚todo
dbLogger.info('This is an informational message')

// Creaci¢n de otro objeto
const accessLogger = new Logger('ACCESS')
accessLogger.verbose('This is a verbose message')