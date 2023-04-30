const Login = require('../model/Login');
class ChangePassController {
    index(req, res) {
        res.render('changePass/changePass.handlebars');
    }

    update(req, res, next) {
        Login.updateOne({ _id: req.cookies.userId }, req.body)
            .then(() => res.redirect('/'))
            .catch(() => res.send('error'));
    }
}

module.exports = new ChangePassController();
