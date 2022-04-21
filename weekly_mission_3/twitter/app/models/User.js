class User {
    constructor(id, username, user, bio){
        this.id = id;
        this.username = username;
        this.user = user;
        this.bio = bio;
        this.dateCreated = new Date();
        this.lasUpdated = new Date();
    }
}

module.exports = User;