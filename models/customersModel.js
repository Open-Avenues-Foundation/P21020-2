const Sequelize = require('sequelize')
const db = require('../config/db')

// we are creating the model
// dont make it plural sequelize will do it for you
// Email,FirstName,LastName,PhoneNumber,City,State,LastOrderPrice,LastOrderDate
const Customer = db.sequelize.define('customer', {
  // Model attributes are defined here
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  firstName: {
    type: Sequelize.STRING
    // allowNull defaults to true
  },
  lastName: {
    type: Sequelize.STRING
  },
  phoneNumber: {
    type: Sequelize.STRING
  },
  city: {
    type: Sequelize.STRING
  },
  state: {
    type: Sequelize.STRING
  },
  lastOrderPrice: {
    type: Sequelize.FLOAT

  },
  lastOrderDate: {
    type: Sequelize.STRING
  }
}, {
  // Other model options go here
  paranoid: true
})

// `sequelize.define` also returns the model
// console.log(Customer === sequelize.models.customer) // true

module.exports = Customer