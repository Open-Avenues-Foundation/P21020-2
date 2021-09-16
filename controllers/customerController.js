// The responsibility of the controller
// is to controll the flow, and orchestracte what functions
// are required to be called to perform a task.

const Customer = require('../models/customersModel');

const getCustomers = async () => {
  return await // Access the model to return all the customers
}

const saveCustomers = (customers) => {
  // What this function has to do is the following
  // 1) iterate over the customers list and cleand the customers
  //    to clean the customers use the following regular expression
  //    /[,]+|[.]{2,}|\s/g
  // 2) Bulk save all the customers using the customer model.
  
  // 1) Iterate over the customers list
  const customersCleaned = customers.((customer) => {
    const cleanEmail = customer.email.replace()

    // How do we return the customer with the new email?
    return {}
  })

  // 2) Save the customers in the DB
  Customers.
}


module.exports = {dataController};
