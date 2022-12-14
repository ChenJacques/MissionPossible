const Task = require('../models/schema.js')

const getTasks = ((req, res) => {
    Task.find({})
        .then(result => res.status(200).json({ result }))
        .catch(error => res.status(500).json({msg: error}))
})

const getTask = ((req, res) => {
    Task.findOne({ _id: req.params.taskID })
        .then(result => res.status(200).json({ result }))
        .catch(() => res.status(404).json({msg: 'Task not found'}))
})

const createTask = ((req, res) => {
    Task.create(req.body)
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(500).json({msg:  error }))
})

const updateTask = ((req, res) => {
    Task.findOneAndUpdate({ _id: req.params.taskID }, req.body, { new: true, runValidators: true })
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(404).json({msg: 'Task not found' }))
})

const deleteTask = ((req, res) => {
    Task.findOneAndDelete({ _id: req.params.taskID })
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(404).json({msg: 'Task not found' }))
})

module.exports = {
    getTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}