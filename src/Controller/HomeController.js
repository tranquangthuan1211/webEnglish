const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const Login = require('../model/Login');
const Scores = require('../model/scores');
const { use } = require('../router/Login');
const scores = require('../model/scores');
let members = [];
let scoreStudent = [];
class HomeController {
    listStudents(req, res, next) {
        Login.find({ idTeacher: req.cookies.userId }, function (err, users) {
            users = users.map((user) => user.toObject());
            members = users;
        });
        next();
    }
    listScores(req, res, next) {
        Scores.find({ teacherPost: req.cookies.userId }, function (err, scores) {
            scores = scores.map((score) => score.toObject());
            scoreStudent = scores;
        });
        next();
    }
    index1(req, res, next) {
        console.log(req.params.slug);
        Login.find({ _id: req.cookies.userId })
            .then((users) => {
                users = users.map((user) => user.toObject());
                res.cookie('idCourses', users[0].idCourses);
                if (users[0].people === 'student') {
                    res.render('Home/home.handlebars', {
                        users,
                        slug: req.params.slug,
                        student: true,
                        teacher: false,
                    });
                } else {
                    members.map((member, index) => {
                        member.score = scoreStudent[index].score;
                        member.evaluate = scoreStudent[index].evaluate;
                    });
                    res.render('Home/home.handlebars', {
                        users,
                        slug: req.params.slug,
                        student: false,
                        members: members,
                    });
                }
            })
            .catch((error) => {
                res.send('error');
            });
    }
    index(req, res) {
        Login.find({ email: 'tranquanthuan132@gmail.com' })
            .then((user) => {
                res.json(user);
            })
            .catch((error) => {
                res.send('loi');
            });
    }
    login(req, res) {
        res.render('Login/login.handlebars');
    }

    handleLogin(req, res) {
        var email = req.body.email;
        var pass = req.body.pass;
        dotenv.config();
        Login.findOne({ email: email })
            .then((user) => {
                if (user === null) {
                    res.render('Login/login.handlebars', {
                        errors: ['use does not exits'],
                        values: req.body,
                    });
                    return;
                } else if (user.pass !== pass) {
                    res.render('Login/login.handlebars', {
                        errors: ['Wrong password'],
                        values: req.body,
                    });
                    return;
                } else {
                    res.cookie('userId', user._id);
                    res.cookie('teacher', user.idTeacher);
                    res.redirect('/user/home');
                }
            })
            .catch((error) => {
                res.send(error);
            });
    }
}

module.exports = new HomeController();
