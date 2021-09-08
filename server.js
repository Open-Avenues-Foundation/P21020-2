/* eslint-disable no-console */
const express = require('express')
const db = require('./config/db')
const app = express()
const PORT = process.env.PORT || 7000
const { allCustomers, bulkCreateCustomers } = require('./router/router.js')


app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.get('/', allCustomers) // will display current customer before being cleaned but later should display only cleaned data from db.
app.post('/upload-csv', bulkCreateCustomers) // will read the data from csv file


// testing my connection here
db.sequelize
  .authenticate()
  .then(() => {
    console.log('connected to db server')
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err)
  })

app.listen(PORT, () => {
  console.log(`Your Web server is running on http://localhost:${PORT} and you're connected to the database server`)
})

// class Customer extends Model {}
// Customer.init({
//     email: DataTypes.STRING,
//     firstName: DataTypes.STRING,
//     lastName: DataTypes.STRING,
//     phoneNumber: DataTypes.INTEGER,
//     city: DataTypes.STRING,
//     state: DataTypes.STRING,
//     lastOrderPrice: DataTypes.DECIMAL,
//     lastOrderDate: DataTypes.DATEONLY

// }, { sequelize, modelName: 'customer' });

// (async () => {
//   await sequelize.sync();
//   const mike = await Customer.create({
//     email: 'mike@ike.com',
//     firstName: 'mike',
//     lastName: 'ike',
//     phoneNumber:1234567890,
//     city:'chicago',
//     state: 'minisota',
//     lastOrderPrice: 12.50,
//     lastOrderDate: new Date(2021,9,14)
//   });
//   console.log(mike.toJSON());
// })();







