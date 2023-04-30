const { default: mongoose } = require('mongoose');

const Schema = mongoose.Schema;
// Login student
const Login = new Schema({
    people: { type: String },
    latsName: { type: String },
    firstName: { type: String },
    email: { type: String },
    pass: { type: String },
    day: { type: Number },
    month: { type: Number },
    yeard: { type: Number },
    idCourses: { type: String },
    idTeacher: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Login', Login);
