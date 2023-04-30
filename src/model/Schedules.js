const { default: mongoose } = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Schedule = new Schema({
    nameUser: { type: String },
    coursesMD: [{ name: String, time: String, link: String }],
    coursesTD: { type: Array },
    coursesWD: { type: Array },
    coursesTHD: { type: Array },
    coursesFD: { type: Array },
    coursesST: { type: Array },
    coursesSD: { type: Array },
    updateTimes: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Schedule', Schedule);
