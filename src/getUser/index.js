const Login = require('../model/Login');
const { use } = require('../router/Login');
let user;
let userHandle = (req, res) => {
    Login.find({ _id: req.cookies.userId })
        .then((users) => {
            users = users.map((user) => user.toObject());
            user = users[0].latsName;
        })
        .catch(next);
    return user;
};

module.exports = { user: userHandle };
