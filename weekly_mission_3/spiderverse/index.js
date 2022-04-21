const Spiderman = require('./app/spiderman');

const andrewGarfield = new Spiderman("Spiderman Sony", 31, "Andrew Garfield", 2, "Sony");
console.log(andrewGarfield);
console.log(andrewGarfield.getInfo());

const tomHolland = new Spiderman("Spiderman Marvel", 25, "Tom Holland", 5, "Marvel");
console.log(tomHolland);
console.log(tomHolland.getInfo());