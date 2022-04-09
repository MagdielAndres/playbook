class Logger {
  constructor(name){
    // Al crear este objeto se guardar n estos valores
    this.count = 0
    this.name = name
  }

  log(message) {
    this.count++ // se aumenta el contador interno al llamar este m‚todo
    console.log('[' + this.name + '] ' + message)
  }
}

module.exports = new Logger('DEFAULT') // Instanciaci¢n del objeto y se exporta