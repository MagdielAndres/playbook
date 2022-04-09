
/*
  Al exportar una funci¢n/objeto as¡:

  > module.exports.verbose

  Estaremos exportando el contenido con el nombre `verbose`

  module.exports har  que puedas invocar esta funci¢n en otro script como:
  > const logger = require('./logger')

  y usarla como:

  > logger.verbose("Heeey!")
*/

module.exports.verbose = (message) => {
  console.log(`verbose: ${message}`)
}