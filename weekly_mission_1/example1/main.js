// 1. Creaci¢n de un objeto con propiedades

let myCar = new Object(); // Creaci¢n de un objeto
myCar.make = 'Ford'; // Guardando un valor dentro del objeto creado
myCar.model = 'Mustang';
myCar.year = 1969;

console.log(myCar) // Imprimiendo objeto

// 2. Declaraci¢n de un objeto con variables locales y p£blicas

const myModule = (() => {

// Variables de contexto local
 const privateFoo = "Soy un valor privado, solo me usan dentro de este objeto"
 const privateBar = [1,2,3,4]
 const baz = "Soy un valor que va a ser expuesto"

// Variable para guardar las variables locales
 const exported = {
   publicFoo: "Valor p£blico, pueden verme desde donde me llamen",
   publicBar: "Otro valor p£blico",
   	publicBaz: baz
 }

// Exposici¢n de variables locales
 return exported
})()

console.log(myModule)