const Login = require('../model/Login');
class SkillsController {
    index(req, res) {
        Login.find({ _id: req.cookies.userId })
            .then((users) => {
                users = users.map((user) => user.toObject());
                res.render('Skills/skill.handlebars', {
                    users: users,
                });
            })
            .catch((error) => {
                res.send('error!!!');
            });
    }

    listening(req, res) {
        Login.find({ _id: req.cookies.userId })
            .then((users) => {
                users = users.map((user) => user.toObject());
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

    reading(req, res) {
        Login.find({ _id: req.cookies.userId })
            .then((users) => {
                users = users.map((user) => user.toObject());
                if (users[0].people === 'student') {
                    res.render('Skills/reading.handlebars', {
                        users,
                        slug: req.params.slug,
                        student: true,
                        teacher: false,
                    });
                } else {
                    res.render('Skills/reading.handlebars', {
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

    speaking(req, res) {
        Login.find({ _id: req.cookies.userId })
            .then((users) => {
                users = users.map((user) => user.toObject());
                if (users[0].people === 'student') {
                    res.render('Skills/speaking.handlebars', {
                        users,
                        slug: req.params.slug,
                        student: true,
                        teacher: false,
                    });
                } else {
                    res.render('Skills/speaking.handlebars', {
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

    writting(req, res) {
        Login.find({ _id: req.cookies.userId })
            .then((users) => {
                users = users.map((user) => user.toObject());
                if (users[0].people === 'student') {
                    res.render('Skills/writting.handlebars', {
                        users,
                        slug: req.params.slug,
                        student: true,
                        teacher: false,
                    });
                } else {
                    res.render('Skills/writting.handlebars', {
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

module.exports = new SkillsController();
