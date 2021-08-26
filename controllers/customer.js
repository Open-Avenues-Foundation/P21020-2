const sanitizeEmails = require('../models/customer.js');

const uploadCsv = customers => {
  // iterate over all the customers in the array.
  const sanitizedCustomers = customers.map(customer =>
    sanitizeEmails(customer),
  );

  //Customer.bulkCreate(sanitizedCustomers).then(() => {return Customer.all()})
  // save the customers into the db
};

module.exports = uploadCsv;
