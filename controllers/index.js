// const { indexModel } = require('../models/indexModel.js')
const Customer = require('../models/customersModel')
// just sending  the request and response to the index model here
const getIndexController = async (req, res) => {
  const customers = await Customer.findAll()

  if (customers.length > 0) {
    return res.status(200).send(customers)
  } else {
    return res.status(404).send('ERR: no customers found, did you upload your csv to public folder?')
  }
}

module.exports = { getIndexController }
