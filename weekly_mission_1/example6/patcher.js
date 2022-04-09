/*
 * Ten en cuenta:
 *    - require('./logger') te dar  el objeto creado
 *    - require('./logger').Logger te regresar  la clase
 *
 * En este caso estamos agregando una funci¢n m s al objeto instanciado, no a la clase.
 * */
require('./logger').customMessage = function () {
    console.log('This is a new functionality')
}