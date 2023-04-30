const Login = require('../model/Login');
const Schedule = require('../model/Schedules');
let schedule = [];
class UpdateSchduleController {
    scheduleUpdate(req, res, next) {
        Schedule.find({ nameUser: req.cookies.userId })
            .then((schedules) => {
                schedules = schedules.map((schedule) => schedule.toObject());
                schedule = schedules;
            })
            .catch((error) => res.send(error));
        next();
    }
    index(req, res) {
        Login.find({ _id: req.cookies.userId })
            .then((users) => {
                console.log(schedule);
                users = users.map((user) => user.toObject());
                res.render('upDate/scheduleUpdate.handlebars', {
                    users,
                    schedule,
                });
            })
            .catch((error) => res.send(error));
    }
    updateSchedule(req, res) {
        const formData = req.body;
        let schedulePost = {};
        schedulePost = {
            nameUser: req.cookies.userId,
            coursesMD: [
                {
                    name: formData.nameMonday,
                    time: formData.timeMonday,
                },
            ],
            coursesTD: [
                {
                    name: formData.nameTuesday,
                    time: formData.timeTuesday,
                },
            ],
            coursesWD: [
                {
                    name: formData.nameWednesday,
                    time: formData.timeWednesday,
                },
            ],
            coursesTHD: [
                {
                    name: formData.nameThursday,
                    time: formData.timeThursday,
                },
            ],
            coursesFD: [
                {
                    name: formData.nameFriday,
                    time: formData.timeFriday,
                },
            ],
            coursesST: [
                {
                    name: formData.nameSaturday,
                    time: formData.timeSaturday,
                },
            ],
            coursesSD: [
                {
                    name: formData.nameSunday,
                    time: formData.timeSunday,
                },
            ],
        };
        Schedule.updateOne({ nameUser: req.cookies.userId }, schedulePost)
            .then(() => {
                res.redirect('/user/home');
            })
            .catch((error) => res.send(error));
    }
}

module.exports = new UpdateSchduleController();
