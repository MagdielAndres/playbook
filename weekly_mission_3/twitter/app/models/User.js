class User {
    constructor(id, username, user, bio, dateCreated, lasUpdated){
        this.id = id;
        this.username = username;
        this.user = user;
        this.bio = bio;
        this.dateCreated = dateCreated;
        this.lasUpdated = lasUpdated;
    }
}

module.exports = User;