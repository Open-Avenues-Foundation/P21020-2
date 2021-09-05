/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const validator = require('email-validator')
const Sequelize = require('sequelize')

const sequelize = new Sequelize('customers_DB', 'root', '123456789', {
  host: 'localhost',
  dialect: 'mysql'
})


// we are taking the customers object read from file and converted into csv
// we then running it against our email validator npm package
// if email value is good we push it to clean emails if value is not clean we push it to bad 
// list then attempt to clean it for the user
// when we finished cleaning we should push the final data back to the cleaned already and return to the controller who will push back to the model 
// or we could push it to model directly

const cleaned = (req, res, customers) => {
  let cleanedCustomersList = []
  let emailsNeedingRepairs = []
  let cleanedCustomers = customers.map((customer) => {
    // this will show the valid emails and push
    // into cleanedcustomerslist
    if (validator.validate(customer.Email)) {
      cleanedCustomersList.push(customer)
    }
    // else if there is a bad email
    // it will push it to bad email list so we can fix them
    emailsNeedingRepairs.push(customer)
  })

  // res.send(cleanedCustomersList)
  console.log('here\'s the good emails ...')
  console.log(cleanedCustomersList)
  console.log('here\'s a list of the bad emails ...')
  console.log(emailsNeedingRepairs)

  // this was my logic to fix the bad emails
  
  // emailsNeedingRepairs.map((badEmail)=>{
  //     const specialChars = "~!#$%^&*()_+-={}<>,?/':;"
  //     const trailingDots = "..."
  //     const space = " "
  //     let repairedEmails = []
  //     specialChars.forEach(sChar => {
  //         if(badEmail.Email.includes(sChar)){
  //             let fixedEmail = badEmail.Email.replace(sChar, "")
  //             repairedEmails.push(fixedEmail)

  //         }
  //         else if(badEmail.Email.includes(trailingDots)){
  //             let fixedEmail = badEmail.Email.replace(trailingDots, "")
  //             repairedEmails.push(fixedEmail)
  //         }
  //         else if(badEmail.Email.includes(space)){
  //             let fixedEmail = badEmail.Email.replace(space, "")
  //             repairedEmails.push(fixedEmail)
  //         }
  //     });

  // })
  // sequelize.define("customers", {
  //     // s will be appended automatically to the tablename
  //     email: Sequelize.STRING,
  //     firstName: Sequelize.STRING,
  //     lastName: Sequelize.STRING,
  //     lastOrderPrice: Sequelize.STRING,
  //     LastOrderDate: Sequelize.STRING,
  //   });
}

module.exports = { cleaned }
