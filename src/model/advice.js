const { default: mongoose } = require('mongoose');

const Schema = mongoose.Schema;

const Advice = new Schema({
    notification: { type: String },
    idPost: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model(' Advice ', Advice);
