const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000
app.use(cors())

const courses = require('./data/courses.json')
app.get('/', (req, res) => {
    res.send(courses)
})
app.get('/courses/:id', (req, res) => {
    const id = req.params.id
    const selectedCoursebyId = courses.find(n =>
        n.course_id == id
    )
    res.send(selectedCoursebyId)
})
app.get('/courses/:name', (req, res) => {
    const name = req.params.name
    const selectedCoursebyName = courses.find(n =>
        n.course_name == name
    )
    res.send(selectedCoursebyName)
})

app.listen(port, () => {
    console.log('All Courses', port);
})