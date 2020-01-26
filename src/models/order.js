const mongoose = require('mongoose')
const validator = require('validator')

const Order = mongoose.model('Order',{ //mongoose converts the name 'Task' into tasks(ie pluralises it and smallcase)
    orderno: {
            type:String,
            trim:true,
            required:true
    },
    account: {
        type:String,
        required:true
    }
})
module.exports = Order
