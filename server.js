/* eslint-disable no-console */
const express = require('express')
const db = require('./config/db')
const app = express()
const PORT = process.env.PORT || 7000

const customerRoutes = require('./routes/customer')
const smsRoute = require('./routes/smsRoute')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Here we are going to setup the customer routes
customerRoutes(app)
smsRoute(app)


db.sequelize
  .authenticate()
  .then(() => {
    console.log('connected to db server');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

app.listen(PORT, () => {
  console.log(`Your Web server is running on http://localhost:${PORT} and you're connected to the database server`)
})

