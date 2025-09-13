const express = require('express')
const app = express()


app.set('view engine', 'ejs')
app.set('views', './views')


app.get('/', (req,res) => {
    res.render("index", {name: "Nikhil"})
    // res.sendStatus(200).json("hello")
})





app.listen(5000, () => {
    console.log("listening on port 5000")
})