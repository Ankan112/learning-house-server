const express = require("express");
const cors = require("cors")

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./courses.json')

app.get('/', (req, res) => {
    res.send('Learning website is runing')
})
app.get('/courses', (req, res) => {
    res.send(courses)
})
app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const course = courses.find(cr => cr.id == id);
    res.send(course)
})
app.get('/checkout/:id', (req, res) => {
    const id = req.params.id;
    const course = courses.find(cr => cr.id == id);
    res.send(course)
})
app.listen(port, () => {
    console.log(`Learning site on port, ${port}`)
})