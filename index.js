const express = require('express')
const app= express()
const { engine } = require('express-handlebars')

const PORT = 3000

/* sets up express-handlebars view engine */
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')


app.get('/', (req, res) => {
    res.render('home')
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