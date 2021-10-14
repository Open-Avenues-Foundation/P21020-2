/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const validator = require('email-validator')
// we are taking the customers object read from file and converted into csv
// we then running it against our email validator npm package
// if email value is good we push it to clean emails if value is not clean we push it to bad 
// list then attempt to clean it for the user
// when we finished cleaning we should push the final data back to the cleaned already and return to the controller who will push back to the model 
// or we could push it to model directly
const cleaned = (req, res, customers) => {
  const specialCharacters = [',', '!', '~', '$', '%', '^', '&', '*', '..', '...', '\'', ':', ';']
  const space = ' '

  customers.map((customer) => {
    specialCharacters.forEach((schar) => {
      if (customer.email.includes(schar)) {
        customer.email = customer.email.replace(schar, '')
      }
      if (customer.email.includes(space)) {
        customer.email = customer.email.replace(space, '')
      }
    })

    return customers
  })

  return customers
}


module.exports = { cleaned }
