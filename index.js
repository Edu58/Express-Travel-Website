const express = require('express')
const app= express()
const { engine } = require('express-handlebars')
const RandomFortune = require('./lib/fortunes')


const PORT = 3000

/* configure static files folder path */
app.use(express.static(__dirname + '/public'))

/* sets up express-handlebars view engine */
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')


app.get('/', (req, res) => {
    res.render('home')
})

/* add dynamic content to views */
app.get('/fortune', (req, res) => {
    res.render('fortunes', {fortune: RandomFortune})
})

/* Custom 404 Page. Should be below other routes */
app.use((req, res) => {
    res.type('text/plain')
    res.status(404)
    res.send('404 - Page NOT Found')
})

/* Custom 500 Page. Should be the last route */
app.use((req, res) => {
    res.type('text/plain')
    res.status(500)
    res.send('500 - Server Error')
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})