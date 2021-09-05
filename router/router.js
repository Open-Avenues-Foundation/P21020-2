const { getIndexController } = require('../controllers/indexController')
const { dataController } = require('../controllers/readCsvFile')

const getIndex = (req, res) => {
  return getIndexController(req, res)
}

const createData = (req, res) => {
  return dataController(req, res)
}

module.exports = { getIndex, createData }
