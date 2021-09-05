const express = require('express')
const Sequelize = require('sequelize')
const app = express()
const PORT = process.env.PORT || 7000
const { getIndex, createData } = require('./router/router.js')


app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.get('/', getIndex) // will display current customer before being cleaned
app.post('/upload-csv', createData) // will read the data from csv file

// Option 1: Passing parameters separately
const sequelize = new Sequelize('customers_DB', 'root', '123456789', {
  host: 'localhost',
  dialect: 'mysql'
})

// testing connection
sequelize
  .authenticate()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Your Web server is running on http://localhost:${PORT} and you're connected to the database server`)
    })
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err)
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







