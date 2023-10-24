const User = require("../model/user");

let controller = {
    findUser: function (req, res, next) {
        let { username, password } = req.body;
        let user = User.findUser(username, password);
        if (user) {
            const authToken = `${new Date().toJSON() + username}`;
            res.json({ token: authToken, username: username });
        } else {
            res.status(401).json({ error: 'Invalid credentials' });
        }
    }
}

module.exports = controller;