const { VirtualType } = require('mongoose');
const Login = require('../model/Login');
class Auth {
    index(req, res, next) {
        if (!req.cookies.userId) {
            res.redirect('/');
            return;
        } else {
            next();
        }
        Login.find({ _id: req.cookies.userId })
            .then((user) => {
                if (user === null) {
                    res.redirect('/');
                }
            })
            .catch((error) => {
                res.send('errror');
            });
    }
}

module.exports = new Auth();
