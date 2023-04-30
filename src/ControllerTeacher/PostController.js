const Login = require('../model/Login');
const Schedule = require('../model/Schedules');
const HomeWork = require('../model/homeWork');
const Documents = require('../model/document');
let infor = [];
class PostController {
    homeWork(req, res) {
        Login.find({ _id: req.cookies.userId })
            .then((users) => {
                users = users.map((user) => user.toObject());
                infor = users;
                res.render('HomeWork/homeWork.handlebars', {
                    users,
                });
            })
            .catch((error) => res.send('error'));
    }
    saveHomeWork(req, res) {
        const formData = req.body;
        formData.teacherPost = req.cookies.userId;
        const newHomeWork = new HomeWork(formData);
        newHomeWork
            .save()
            .then(() => {
                res.render('HomeWork/homeWork.handlebars', {
                    users: infor,
                    upload: true,
                });
            })
            .catch((error) => {
                res.send(error);
            });
    }
    document(req, res) {
        Login.find({ _id: req.cookies.userId })
            .then((users) => {
                users = users.map((user) => user.toObject());
                infor = users;
                res.render('Documents/document.handlebars', {
                    users,
                });
            })
            .catch((error) => res.send(error));
    }
    saveDocuments(req, res) {
        const formData = req.body;
        formData.idPost = req.cookies.userId;
        const documents = new Documents(formData);
        documents
            .save()
            .then(() => {
                res.render('Documents/document.handlebars', {
                    users: infor,
                    upload: true,
                });
            })
            .catch((error) => {
                res.send(error);
            });
    }
    schedule(req, res) {
        Login.find({ _id: req.cookies.userId }).then((users) => {
            users = users.map((user) => user.toObject());
            res.render('PostSchedule/schedule.handlebars', {
                users,
            });
        });
    }
    saveSchedule(req, res) {
        const formData = req.body;
        let schedulePost = {};
        schedulePost = {
            nameUser: req.cookies.userId,
            coursesMD: [
                {
                    name: formData.nameMonday,
                    time: formData.timeMonday,
                    link: formData.linkMonday,
                },
            ],
            coursesTD: [
                {
                    name: formData.nameTuesday,
                    time: formData.timeTuesday,
                    link: formData.linkTuesday,
                },
            ],
            coursesWD: [
                {
                    name: formData.nameWednesday,
                    time: formData.timeWednesday,
                    link: formData.linkWednesday,
                },
            ],
            coursesTHD: [
                {
                    name: formData.nameThursday,
                    time: formData.timeThursday,
                    link: formData.linkThursday,
                },
            ],
            coursesFD: [
                {
                    name: formData.nameFriday,
                    time: formData.timeFriday,
                    link: formData.linkFriday,
                },
            ],
            coursesST: [
                {
                    name: formData.nameSaturday,
                    time: formData.timeSaturday,
                    link: formData.linkSaturday,
                },
            ],
            coursesSD: [
                {
                    name: formData.nameSunday,
                    time: formData.timeSunday,
                    link: formData.linkSunday,
                },
            ],
        };
        const newSchedule = new Schedule(schedulePost);

        newSchedule
            .save()
            .then(() => res.redirect('/user/home'))
            .catch((error) => res.send(error));
    }
}

module.exports = new PostController();
