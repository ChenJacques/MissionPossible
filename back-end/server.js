const express = require('express')
const mongoose = require('mongoose')
const app = express()
const routes = require('./routes/routing.js')
const cors = require('cors');
require('dotenv').config()

mongoose.connect(process.env.MONGO_URI)
    .then((result) => app.listen(5000))
    .catch((err) => console.log(Error))

app.use(cors({
    origin: '*'
}));    

app.use(express.json())
app.use('/api/todolist', routes)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})