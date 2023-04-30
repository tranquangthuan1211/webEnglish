const { default: mongoose } = require('mongoose');

const Schema = mongoose.Schema;

const Document = new Schema({
    title: { type: String },
    link: { type: String },
    idPost: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Document', Document);
