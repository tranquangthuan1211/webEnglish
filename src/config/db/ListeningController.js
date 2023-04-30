const Login = require('../../model/Login');
class LiteningController {
    index(req, res) {
        Login.find({ _id: req.cookies.userId })
            .then((users) => {
                users = users.map((user) => user.toObject());
                console.log(users[0]);
                if (users[0].people === 'student') {
                    res.render('Skills/listening.handlebars', {
                        users,
                        slug: req.params.slug,
                        student: true,
                        teacher: false,
                    });
                } else {
                    res.render('Skills/listening.handlebars', {
                        users,
                        slug: req.params.slug,
                        student: false,
                    });
                }
            })
            .catch((error) => {
                res.send('error!!!');
            });
    }
}

module.exports = new LiteningController();
