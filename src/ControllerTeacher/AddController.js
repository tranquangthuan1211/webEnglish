const Login = require('../model/Login');
const Scores = require('../model/scores');
class AddController {
    index(req, res) {
        Login.find({ _id: req.cookies.userId })
            .then((users) => {
                users = users.map((user) => user.toObject());
                res.render('addStudents/add.handlebars', {
                    users: users,
                });
            })
            .catch((error) => res.send(error));
    }
    handleScoreStart(req, res) {
        const dataScore = {
            score: '0',
            evaluate: 'c',
            emailStudents: req.body.email,
            teacherPost: req.cookies.userId,
        };
        const score = new Scores(dataScore);
        score.save();
        next();
    }
    handleAddStudents(req, res) {
        req.body.idTeacher = req.cookies.userId;
        Login.updateOne({ email: req.body.email }, req.body)
            .then(() => res.redirect('/user/home'))
            .catch((error) => res.send(error));
    }
}

module.exports = new AddController();
