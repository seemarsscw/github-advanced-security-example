const express = require('express')
const app = express()
const port = 3000

//comment added, another
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/demo/:id', (req, res) => {
    // #1
    eval('console.log("something", ' + req.params.id + ')');
    // #2
    eval('console.log("something else", ' + req.params.id + ')');
    res.send(`Hello ${req.params.id}`)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
