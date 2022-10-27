const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000
app.use(cors())

const courses = require('./data/courses.json')

// app.get('/', (req, res) => {
//     res.send('api is running')
// })
app.get('/', (req, res) => {
    res.send('Api is running')
})

app.get('/courses', (req, res) => {
    res.send(courses)
})
app.get('/courses/:id', (req, res) => {
    const id = req.params.id
    const selectedCoursebyId = courses.find(n =>
        n.course_id == id
    )
    // console.log(selectedCoursebyId);
    res.send(selectedCoursebyId)
})


app.listen(port, () => {
    console.log('All Courses', port);
})