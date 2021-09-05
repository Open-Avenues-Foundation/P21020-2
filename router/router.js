
const { getIndexController } = require('../controllers/indexController')
const { dataController } = require('../controllers/readCsvFile')

// this file is just routing so we dont overload the server.js file
// this will get the index which displays all customers
const getIndex = (req, res) => {
  return getIndexController(req, res)
}

// this will use the uploaded data
const createData = (req, res) => {
  return dataController(req, res)
}

module.exports = { getIndex, createData }
