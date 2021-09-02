const express = require('express')
const app = express()
const port = 7000

const { getindex, getAllCustomers, uploadCsv, sanitizeEmails } = require('./api/controller')


app.use(express.json())

app.get('/', getindex)
app.get('/customers', getAllCustomers)
app.get('/upload', uploadCsv)
app.get('/sanitize', sanitizeEmails)


app.listen(port, ()=>{
    console.log('your server feels mighty powerfull running on port: ' + port )
})