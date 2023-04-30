const Login = require('../model/Login');
const Advices = require('../model/advice');
const Documents = require('../model/document');
const HomeWork = require('../model/homeWork');
let userInfor = [];
let newDocuments = [];
let newHomeWork = [];
class IeltsOnlineController {
    getUser(req, res, next) {
        Login.find({ _id: req.cookies.userId }, function (err, users) {
            users = users.map((user) => user.toObject());
            userInfor = users;
        });
        next();
    }
    getDocuments(req, res, next) {
        Documents.find({ idPost: req.cookies.teacher }, function (err, documents) {
            documents = documents.map((documentary) => documentary.toObject());
            newDocuments = documents;
        });
        next();
    }
    getHomeWork(req, res, next) {
        HomeWork.find({ teacherPost: req.cookies.teacher }, function (err, homeWorks) {
            homeWorks = homeWorks.map((homeWork) => homeWork.toObject());
            newHomeWork = homeWorks;
        });
        next();
    }
    index(req, res) {
        Advices.find({ teacherPost: req.cookies.teacher })
            .then((advices) => {
                advices = advices.map((advice) => advice.toObject());
                console.log(newHomeWork);
                res.render('IeltsOnline/ieltsOnline.handlebars', {
                    newAdvices: advices,
                    student: true,
                    users: userInfor,
                    document: newDocuments,
                    homeWork: newHomeWork,
                });
            })
            .catch((erorr) => {
                res.send('error');
            });
    }
}

module.exports = new IeltsOnlineController();
