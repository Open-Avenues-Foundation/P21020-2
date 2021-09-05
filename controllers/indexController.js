const { indexModel } = require('../models/indexModel.js')

// just sending  the request and response to the index model here
const getIndexController = (req, res) => {
  return indexModel(req, res)
}

module.exports = { getIndexController }
