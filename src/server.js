const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Hello Express')
})

app.listen(4242, () => {
    console.log('Express is running')
})