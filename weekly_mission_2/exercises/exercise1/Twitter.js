const user = {
    user: "Magdiel Andrés",
    username: "MagdielAndres",
    bio: "Megusta Jugar futbol en mis tiempos libres, ver peliculas de acción",
    age: 30,
    fotoPerfil: "./img",
    seguidores: 45,
    seguidos: 34,
    getInfoGeneral: function(){
        return `Nombre del Perfil ${this.user}, foto ${this.fotoPerfil} y biografía ${this.bio}`
    }
}

console.log("Usuario: " + user.user);
console.log(user.getInfoGeneral() + "\n");

//objeto de trending_topic

const trending_topic = {
    user: "MagdielAndres",
    description: "El Nuevo nombre de la mascota Woopa",
    imgPerfil: "./img/Woppa.png",
    createDate: "15/04/2022-8:43a.m.",
    lastUpDate: "18/04/2022-18:41p.m.",
    retweets: 746,
    likes: 908,
    getInfoGeneral: function(){
        return `${this.description} fue publicado por ${this.user} y likes alcanzado ${this.likes}`;
    },
    getRetweetsAndLikes: function(){
        return `Retweets ${this.retweets} y likes del post ${this.likes}`;
    }
}

console.log("Treanding Topic");
console.log(trending_topic.getInfoGeneral());
console.log(trending_topic.getRetweetsAndLikes() +"\n");

// Objeto hashtag
const hashtag = {
    user: "DiegoAlaín",
    hashtag: "#NombreDelAjolonauta",
    crateDate: "12/04/2022-23:00p.m",
    retweets: 67,
    likes: 76,
    imgHashtag: "./img/hashtag.png",
    responder: ["#NombreDelAjolonauta Woopa", "#NombreDelAjolonauta Woopy", "....."],
    Compartir: {
        user: ["andres", "Luis","...."]
    },
    getRetweetsAndLikes: function(){
        return `Retweets ${this.retweets} and likes ${this.likes}`
    },
    getInfoGeneral: function(){
        return `Hashtag ${this.hashtag} craete by ${this.user}`
    }
}
console.log("Hashtag");
console.log(hashtag.getInfoGeneral());
console.log(hashtag.getRetweetsAndLikes());
console.log("comentarios: " + hashtag.responder);
console.log("Compartidos: " + hashtag.Compartir.user)