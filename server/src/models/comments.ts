// Dependencies
import mongoose from 'mongoose';

// Comment Schema
const commentSchema =new mongoose.Schema({
    author: {type: mongoose.Schema.Types.ObjectId, ref:'Author', required: true},
    blog: {type: mongoose.Schema.Types.ObjectId, ref: 'Blog', required: true},
    date: { type : Date, default: Date.now },
    title: {type: String, required: true},
    body: String,
});

// Export
module.exports = mongoose.model('Comment', commentSchema)
