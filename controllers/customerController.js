const customers = require('../data/customersData')
const sanitizeEmails = require('../models/customerModel')

const uploadCsv = customers => {
  // iterate over all the customers in the array.
  const sanitizedCustomers = customers.map(customer => {
    sanitizeEmails(customer)
  })
}

const getCustomerById = async (req, res) => {
  const id = req.params.id
  const customerById = await customers.Customer.findOne({ // may need to rename based on model created by Sherron
    where: { id },
    include: [
      { model: customers.phoneNumber } // may need to rename/adjust according to model
    ]
  })

  return customerById ? res.send(customerById) : res.sendStatus(404).send('Customer Not Found')
}



module.exports = { uploadCsv, getCustomerById }