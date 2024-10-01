const express = require('express')
const app = express();

const db = require('./db.js')

app.get('/', (req,res) => {
    res.send('Welcome to our Hotel!!!')
})




app.listen(3000, () => {
    console.log(`Listening on port 3000`)
})

