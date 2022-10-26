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
app.listen(port, () => {
    console.log(`Learning site on port, ${port}`)
})