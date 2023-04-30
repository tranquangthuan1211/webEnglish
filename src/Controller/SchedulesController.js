const Schedules = require('../model/Schedules');
const Login = require('../model/Login');
const User = require('../getUser/index');
let userInfor = [];
class SchedulesController {
    getUser(req, res, next) {
        Login.find({ _id: req.cookies.userId }, function (err, users) {
            users = users.map((user) => user.toObject());
            userInfor = users;
        });
        next();
    }
    handleSchedule(req, res, next) {
        if (req.cookies.idCourses === 'null') {
            res.render('Schedules/schedules.handlebars', {
                schedules: false,
                user: userInfor,
                max: 2,
            });
        } else {
            next();
        }
    }
    index(req, res, next) {
        Schedules.find({ nameUser: req.cookies.teacher })
            .then((Schedules) => {
                Schedules = Schedules.map((schedule) => schedule.toObject());
                console.log(Schedules);
                res.render('Schedules/schedules.handlebars', {
                    schedules: Schedules,
                    user: userInfor,
                    max: 2,
                });
            })
            .catch(next);
    }
}

module.exports = new SchedulesController();
