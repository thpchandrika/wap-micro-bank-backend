const data = require("../data/data")

class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    static findUser(username, password) {
        return data.users.find(u => u.username === username);
    }
}

module.exports = User;