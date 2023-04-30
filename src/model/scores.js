const { default: mongoose } = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
// Login teacher
const Score = new Schema({
    score: { type: String },
    teacherPost: { type: String },
    evaluate: { type: String },
    emailStudents: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Score', Score);
