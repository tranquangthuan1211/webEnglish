const Login = require('../model/Login');
const Advice = require('../model/advice');
class AdviceController {
    getViewAdvice(req, res) {
        Login.find({ _id: req.cookies.userId })
            .then((users) => {
                users = users.map((user) => user.toObject());
                res.render('Advice/advice.handlebars', {
                    users,
                });
            })
            .catch((error) => res.send(error));
    }
    saveAdvie(req, res) {
        let formAdvice = req.body;
        formAdvice.idPost = req.cookies.userId;
        const newAdvice = new Advice(formAdvice);
        newAdvice
            .save()
            .then(() => {
                res.redirect('/user/home');
            })
            .catch((error) => {
                res.send(error);
            });
    }
}

module.exports = new AdviceController();
