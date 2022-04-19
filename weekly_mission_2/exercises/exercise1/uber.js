//objeto profile
const profile = {
     user: "Diego Alaín",
     username: "DiegoAlain",
     createDate: "28-03-2021",
     direccion: "Huautla, Hidalgo",
     telefono: "34554655",
     getinfoGeral: function(){
         return `Nombre del usuario ${this.user}, dirección ${this.direccion} y telefono ${this.telefono}`
     }
}

console.log("Usuario: " + profile.username);
console.log(profile.getinfoGeral() + "\n");

// objeto travel
const travel = {
    Origen: "Huautla",
    Destino: "Huejutla",
    Precio: "$200.00",
    nombreConductor: "Mauricio Cruz",
    marcaCarro: "Chevrolet",
    modeloCarrro: "S234",
    numPlacasCarro: "HTR-678-gfdf",
    getinfoviaje: function(){
        return `Origen ${this.Origen}, destino ${this.Destino} y precio del viaje ${this.Precio}`
    },
    getinfoConductor: function(){
        return `Nombre del Chofer ${this.nombreConductor}, marca del carro ${this.marcaCarro}, modelo ${this.modeloCarrro} y placas del carro ${this.numPlacasCarro}`
    }
}
console.log(travel.getinfoviaje());
console.log(travel.getinfoConductor());