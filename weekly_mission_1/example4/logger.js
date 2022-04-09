class Logger {
  constructor(name) {
    // this es una variable para referenciar el valor del contexto local de esta clase
    this.name = name // Est s variables se le conocen como atributos
  }

  // m‚todo
  // this.name es la variable que se guarda en el contexto local
  // message es una variable que se le pasa al ejecutar este m‚todo
  info (message) {
    console.log(`[Objeto con nombre: ${this.name}] info: ${message}`)
  }

  // m‚todo
  verbose (message) {
    console.log(`[Objeto con nombre: ${this.name}] verbose: ${message}`)
  }
}

// Esta clase se exporta en este m¢dulo
module.exports = Logger