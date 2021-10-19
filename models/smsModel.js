const { Sequelize } = require('sequelize')
const db = require('../config/db')

// we are creating the model
// dont make it plural sequelize will do it for you
// Email,FirstName,LastName,PhoneNumber,City,State,LastOrderPrice,LastOrderDate
const Message = db.sequelize.define('message', {
  // Model attributes are defined here
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  phoneNumber: {
    type: Sequelize.STRING,
    allowNull: false
  },
  message: {
    type: Sequelize.STRING,
    allowNull: false
  },
  messageStatus: {
    type: Sequelize.STRING,
    allowNull: false
  },
}, {
  // Other model options go here
  paranoid: true
})

// `sequelize.define` also returns the model
// console.log(Customer === sequelize.models.customer) // true

module.exports = Message
