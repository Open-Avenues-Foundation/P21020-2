const Sequelize = require('sequelize')
// Option 1: Passing parameters separately
const sequelize = new Sequelize('privyDb', 'root', '123456789', {
  host: 'localhost',
  dialect: 'mysql'
})


module.exports = { sequelize }