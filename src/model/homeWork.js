const { default: mongoose } = require('mongoose');

const Schema = mongoose.Schema;

const HomeWork = new Schema({
    title: { type: String },
    link: { type: String },
    teacherPost: { type: String },
    linkHomeWork: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model('HomeWork', HomeWork);
