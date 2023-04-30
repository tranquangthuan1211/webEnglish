const Login = require('../model/Login');
class LiveCoursesController {
    index(req, res) {
        Login.find({ _id: req.cookies.userId })
            .then((users) => {
                users = users.map((user) => user.toObject());
                res.render('LiveCourses/liveCourses.handlebars', {
                    users,
                });
            })
            .catch((error) => {
                res.send('error');
            });
    }
}

module.exports = new LiveCoursesController();
