const express = require('express');
const cors = require('cors');
const review = require('./data/review.json')
const course = require('./data/course.json')
const app = express();
const port = process.env.PORT || 5000;

// middleWare
app.use(cors())

app.get('/', (req, res)=>{
    res.send('online crouse server project is running')
})

app.get('/review', (req, res)=>{
    res.send(review)
})

app.get('/course', (req, res) =>{
    res.send(course)
})

app.listen(port)