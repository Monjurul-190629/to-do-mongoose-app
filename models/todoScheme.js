const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        default: "Anonymous"
    },
    
    status: {
        type: String,
        enum: ['active', 'inactive'],
        required: true
    },
    date : {
        type : Date, 
        enum: Date.now
    }
});

const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;
