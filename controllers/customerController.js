/* eslint-disable no-console */
// The responsibility of the controller
// is to controll the flow, and orchestracte what functions
// are required to be called to perform a task.

const Customer = require('../models/customersModel')

const getCustomers = async () => {
  return await Customer.findAll() // Access the model to return all the customers
}

const saveCustomers = async (customers) => {
  // What this function has to do is the following
  // 1) iterate over the customers list and cleand the customers
  //    to clean the customers use the following regular expression
  //    /[,]+|[.]{2,}|\s/g
  // 2) Bulk save all the customers using the customer model.

  // 1) Iterate over the customers list
  const cleanCustomerList = customers.map(customer => {
    const regex = /[,]+|[.]{2,}|\s/g

    customer.email = customer.email.replace(regex, '')
    console.log(customer)

    return customer
  })

  console.log(cleanCustomerList)

  return await Customer.bulkCreate(cleanCustomerList)
}


module.exports = { saveCustomers, getCustomers }
