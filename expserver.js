const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/user', (req, res) => {
    res.status(200).json({
        name:"name",
        nicname:"nic"
    })
})

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})