const Login = require('../model/Login');
class HandleSchedule {
    index(req, res, next) {
        Login.find({ id: req.cookies.userId }).then((users) => {
            users = users.map((user) => user.toObject());
            console.log(users[0]);
            // if (!users[0].idCourses) {
            //     res.render('Schedules/schedules.handlebars', {
            //         user: users,
            //         max: 2,
            //     });
            // } else {
            //     next();
            // }
        });
    }
}

module.exports = new HandleSchedule();
