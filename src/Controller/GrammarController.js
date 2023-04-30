const { find } = require('../model/Login');
const Login = require('../model/Login');
class GrammarController {
    index(req, res) {
        Login.find({ _id: req.cookies.userId })
            .then((users) => {
                users = users.map((user) => user.toObject());
                res.render('Grammar/grammar.handlebars', {
                    users,
                });
            })
            .catch((error) => res.send('error'));
    }
    grammar1(req, res) {
        Login.find({ _id: req.cookies.userId })
            .then((users) => {
                users = users.map((user) => user.toObject());
                res.render('Grammar/grammar1.handlebars', {
                    users,
                });
            })
            .catch((error) => res.send('error'));
    }
    grammar2(req, res) {
        Login.find({ _id: req.cookies.userId })
            .then((users) => {
                users = users.map((user) => user.toObject());
                res.render('Grammar/grammar2.handlebars', {
                    users,
                });
            })
            .catch((error) => res.send('error'));
    }
    grammar3(req, res) {
        Login.find({ _id: req.cookies.userId })
            .then((users) => {
                users = users.map((user) => user.toObject());
                res.render('Grammar/grammar3.handlebars', {
                    users,
                });
            })
            .catch((error) => res.send('error'));
    }
}

module.exports = new GrammarController();
