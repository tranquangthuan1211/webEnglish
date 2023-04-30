const Login = require('../model/Login');
class VocabularyController {
    index(req, res) {
        Login.find({ _id: req.cookies.userId }).then((users) => {
            users = users.map((user) => user.toObject());
            res.render('Vocabulary/vocabulary.handlebars', {
                users,
            });
        });
    }

    vocabulary1(req, res) {
        Login.find({ _id: req.cookies.userId }).then((users) => {
            users = users.map((user) => user.toObject());
            res.render('Vocabulary/vocabulary1.handlebars', {
                users,
            });
        });
    }

    vocabulary2(req, res) {
        Login.find({ _id: req.cookies.userId }).then((users) => {
            users = users.map((user) => user.toObject());
            res.render('Vocabulary/vocabulary2.handlebars', {
                users,
            });
        });
    }

    vocabulary3(req, res) {
        res.send('hello');
    }
}

module.exports = new VocabularyController();
