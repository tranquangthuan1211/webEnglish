const Login = require('../model/Login');
class PageStudent {
    index(req, res, next) {
        Login.find({ _id: req.cookies.userId }).then((users) => {
            users = users.map((user) => user.toObject());

            if (users[0].people === 'student') {
                next();
            } else {
                res.render('error/index.handlebars');
            }
        });
    }
}

module.exports = new PageStudent();
