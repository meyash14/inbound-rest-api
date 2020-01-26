const express = require('express')
require('./db/mongoose')
const Order = require('./models/order')


const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/orders',(req,res) => {
    const order = new Order(req.body)
    order.save().then(() => {
        res.send(order)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})