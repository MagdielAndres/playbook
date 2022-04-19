// objeto user
const user = {
    user: "Magdiel Andrés CAstellanos de la Cruz",
    username: "MagdielandresCastellanos",
    imgPerfil: "./img/perfil.jpg",
    imgPortada: "./img/portada.jpg",
    detalles: {
        direccion: "Barrio alto, Huautla, Hidalgo",
        createDate: "12/04/2019",
        formacionAcademica: "Universidad, Cecyteh",
        ciudadOrigen: "Huautla",
    },
    getUserImgPerfilImgPortada: function(){
        return `Usuario ${this.user} foto de perfil ${this.imgPerfil} y foto de portada ${this.imgPortada}`
    },
    getDescripcion: function(){
        return `Dirección ${this.detalles.direccion} la cuenta fue crada ${this.detalles.createDate}`
    }
}

console.log("Perfil del uaurio: "+ user.username);
console.log(user.getUserImgPerfilImgPortada());
console.log(user.getDescripcion() + "\n");

// Objeto post
const post = {
    user: "diego",
    imgPerfil: "./img/perfil.jpg",
    imgPost: "./img/post.jpg",
    descripcion: "Descripción del post",
    megusta: 456,
    comentarios: ["Descripción 1","Descipción 2", "Descripción ...."],
    getinfUser: function(){
        return `Creado por ${this.user} y foto del usuario ${this.imgPerfil}`
    },
    getInfoPost: function(){
        return `${this.descripcion} foto post ${this.imgPost}`
    },
    getComentarios: function(){
        return `Comentarios ${this.comentarios} y likes ${this.megusta}`
    }
}
console.log("Post");
console.log(post.getinfUser());
console.log(post.getInfoPost());
console.log(post.getComentarios());