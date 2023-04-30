const Login = require('./Login.js');
const register = require('./Register');
const home = require('./Home');
const schedule = require('./schedule');
const liveCourse = require('./LiveCourses');
const ielts = require('./IeltsOnline');
const listening = require('./Skill');
const grammar = require('./Grammar');
const vocabulary = require('./Vocanulary');
const pageStudent = require('../middleware/pageStudent.middlewate');
const Auth = require('../middleware/auth.middleware');
const changePass = require('./ChangePass');
const post = require('./Post');
const add = require('./Add');
const manager = require('./ManagerStudents');
const update = require('./UpdateSchedule');
const advice = require('./Advice');

const route = (app) => {
    // student
    app.use('/change-pass-word', changePass);
    app.use('/live-course', pageStudent.index, liveCourse);
    app.use('/skills', pageStudent.index, listening);
    app.use('/grammar', pageStudent.index, grammar);
    app.use('/vocabulary', pageStudent.index, vocabulary);
    app.use('/ielts', pageStudent.index, ielts);
    app.use('/register', pageStudent.index, register);
    app.use('/schedule', pageStudent.index, schedule);
    // teacher
    app.use('/student', manager);
    app.use('/advice', advice);
    app.use('/update', update);
    app.use('/post', post);
    app.use('/add', add);
    app.use('/user', Auth.index, home);
    app.use('/', Login);
};
module.exports = route;
