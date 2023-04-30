const Login = require('../model/Login');
class RegisterController {
    index(req, res) {
        res.render('Register/register.handlebars');
    }

    RegisterSteacher(req, res) {
        res.render('Register/page_teacher.handlebars');
    }
    handleTeacher(req, res) {
        req.body.people = 'teacher';
        const formData = req.body;
        const teacher = new Login(formData);
        teacher
            .save()
            .then(() => {
                res.redirect('/');
            })
            .catch((error) => {
                res.send('error');
            });
    }
    RegisterStudent(req, res) {
        res.render('Register/page_student.handlebars');
    }

    handleStudent(req, res) {
        const formData = req.body;
        formData.people = 'student';
        formData.idTeacher = 'null';
        const students = new Login(formData);
        students
            .save()
            .then(() => {
                res.redirect('/');
            })
            .catch((error) => {
                res.send('error');
            });
    }
}

module.exports = new RegisterController();
