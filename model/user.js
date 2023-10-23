const users = [
    { username: 'user1', password: 'user1@123' },
    { username: 'user2', password: 'user2@123' },
];

class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    static findUser(username, password) {
        return users.find(u => u.username === username);
    }

}

module.exports = User;