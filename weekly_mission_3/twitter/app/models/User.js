class User {
    constructor(id, username, user, bio){
        this.id = id;
        this.username = username;
        this.user = user;
        this.bio = bio;
        this.dateCreated = new Date();
        this.lasUpdated = new Date();
    }

    get getUsername(){
        return this.username;
    }
    get getBio(){
        return this.bio;
    }
    get getDateCreated(){
        return this.dateCreated;
    }
    get getLasUpdated(){
        return this.lasUpdated;
    }

    set setUsername(newUsername){
        this.username = newUsername;
    }
    set setBio(newBio){
        this.bio = newBio;
    }
}

module.exports = User;