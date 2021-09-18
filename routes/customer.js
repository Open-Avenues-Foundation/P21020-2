const { getCustomers, saveCustomers } = require('../controllers/customerController');

// Customer routes is responsible to define the routes for the customer
const routes = app => {
  // Two of the routes we want to create are:
  // 1) Route to return all the customers
  // '/customers'
  // What type of request are we expecting? GET, POST, PATH, DELETE, and why?
  app.get('/customers', async (req, res) => {
    const customers = await getCustomers() // How do we get the customers?
    res.send(customers)
  })

  // 2) Route to save customers in bulk
  // '/uploadCustomers'
  // What type of request are we expecting? GET, POST, PATH, DELETE, and why?
  app.('', (req, res) => {
    const customersList = // How do we access the request to retrieve the customers?

    // Calling the controller to handle the logic on how to save the customers.
    saveCustomers(customersList)
    res.send('Customers save successfully')
  });
};

module.exports = routes;
