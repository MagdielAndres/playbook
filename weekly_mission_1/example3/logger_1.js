/*
  Esto tambi‚n es la declaraci¢n de una funci¢n

  module.exports har  que puedas invocar esta funci¢n en otro script como:
  > const logger = require('./logger')

  y usarla como:

  > logger("Heeey!")
*/

module.exports = (message) => {
  console.log(`info: ${message}`)
}