const Login = require('../model/Login');
const scores = require('../model/scores');
const Scores = require('../model/scores');
let students = {};
class ManagerStudentsController {
    index(req, res) {
        Login.find({ _id: req.cookies.userId }).then((users) => {
            let slug = req.params.slug;
            console.log(students);
            users = users.map((user) => user.toObject());
            res.render('ManagerStudents/manager.handlebars', {
                users,
                slug,
            });
        });
    }

    handleUpdateScore(req, res) {
        req.body.teacherPost = req.cookies.userId;
        Scores.updateOne({ emailStudents: req.params.slug }, req.body)
            .then(() => res.redirect('/user/home'))
            .catch((error) => res.send(error));
    }
}

module.exports = new ManagerStudentsController();
