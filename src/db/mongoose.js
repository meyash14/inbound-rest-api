const mongoose = require('mongoose')
const connectionURL = 'mongodb://127.0.0.1:27017/inbound-rest-api' // has db name in connection string

mongoose.connect(connectionURL,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useCreateIndex:true //ensures when mongoose works with mongo db  indexes are created so as to quickly access data we need
})
