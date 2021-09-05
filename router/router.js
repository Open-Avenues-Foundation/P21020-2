/* eslint-disable no-console */

const { getIndexController } = require('../controllers/index')
const { dataController } = require('../controllers/customerController')

// this file is just routing so we dont overload the server.js file
// this will get the index which displays all customers
const allCustomers = (req, res) => {
  return getIndexController(req, res)
}

// this will use the uploaded data
const bulkCreateCustomers = (req, res) => {
  return dataController(req, res)
}

module.exports = { allCustomers, bulkCreateCustomers }
