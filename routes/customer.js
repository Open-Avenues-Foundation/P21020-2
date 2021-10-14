const { getCustomers, saveCustomers } = require('../controllers/customerController')

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
  app.post('/uploadCustomers', (req, res) => {
    const customersList = req.body // How do we access the request to retrieve the customers?

    console.log(customersList)

    // Calling the controller to handle the logic on how to save the customers.
    try {
      saveCustomers(customersList)
      res.send('Customers Created Successfully')
    } catch (err) {
      console.log(err)
      res.status(500).send(err)
    }
  })
}

module.exports = routes

/* {
  "email": "spa,dkins@att.net",
  "firstName": "Giovanny",
  "lastName": "Atkinson",
  "phoneNumber": "(401)433-3114",
  "city": "Warner",
  "state": "NH",
  "lastOrderPrice": "35",
  "lastOrderDate": "44420"
},
{
  "A": "zilla@optonline.net",
  "B": "Olive",
  "C": "Lang",
  "D": "(618)472-3603",
  "E": "East Natchitoches",
  "F": "",
  "G": "120",
  "H": "44424"
},*/
