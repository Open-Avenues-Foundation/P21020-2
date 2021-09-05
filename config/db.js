const Sequelize = require('sequelize')
// Option 1: Passing parameters separately
const sequelize = new Sequelize('customers_DB', 'root', '123456789', {
  host: 'localhost',
  dialect: 'mysql'
})


module.exports = { sequelize }
