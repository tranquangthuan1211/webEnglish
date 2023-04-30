const Login = require('../model/Login');
const { use } = require('../router/Login');
class UseController {
    index(req, res) {
        res.render('dashboard/dashboardStudent.handlebars');
    }
}

module.exports = new UseController();
