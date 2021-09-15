const Sequelize = require('sequelize')
const CustomersModel= require('./customerModel.js')
const TextMessageModel = require('./textMessagesModel.js')
const AllConfigs = require('../config/sequelize')
const environment = process.env.NODE_ENV || 'development'
const {
  username, password, database, host, dialect
} = AllConfigs[environment]

const connection = new Sequelize(database, username, password, {
  host, dialect
})

const Customers = CustomersModel(connection, Sequelize)
const TextMessages = textMessageModel(connection, Sequelize, Manufacturers)


module.exports = { Customers, TextMessages }
