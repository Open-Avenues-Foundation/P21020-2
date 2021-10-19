// This server file is responsible for setting up everything
// from the routes, to the db.

/* eslint-disable no-console */
const express = require('express')
const db = require('./config/db')
const app = express()
const PORT = process.env.PORT || 7000
const cors = require('cors')

const customerRoutes = require('./routes/customer')
const smsRoute = require('./routes/smsRoute')

const corsOptions = {
  origin: 'http://localhost:3000'
}

const csvRoute = require('./routes/csvRoute')



app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())


// Here we are going to setup the customer routes
customerRoutes(app)

app.use('/api', smsRoute)

app.get('/test', (req, res) => {
  res.send('working')
})

app.use('/api/uploadcsv', csvRoute)


db.sequelize
  .authenticate()
  .then(() => {
    console.log('connected to db server')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

app.listen(PORT, () => {
  console.log(`Your Web server is running on http://localhost:${PORT} and you're connected to the database server`)
})

