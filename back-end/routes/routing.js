const express = require('express')
const router = express.Router()

const  { 
    getTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
} = require('../controllers/controller.js')

router.get('/', getTasks)

router.get('/:taskID', getTask)

router.post('/', createTask) 

router.put('/:taskID', updateTask) 

router.delete('/:taskID', deleteTask)

module.exports = router
