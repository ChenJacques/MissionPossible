const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    user:String,
    task:String,
    },
    {timestamps: true}
)

const Todo = mongoose.model('Todo', TodoSchema)

module.exports = Todo