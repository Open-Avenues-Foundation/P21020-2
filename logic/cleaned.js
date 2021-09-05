const validator = require('email-validator')
const Sequelize = require('sequelize')

const sequelize = new Sequelize('customers_DB', 'root', '123456789', {
  host: 'localhost',
  dialect: 'mysql'
})

const cleaned = (req, res, customers) => {
  let cleanedCustomersList = []
  let emailsNeedingRepairs = []
  let cleanedCustomers = customers.map((customer) => {
    if (validator.validate(customer.Email)) {
      cleanedCustomersList.push(customer)
    }
    emailsNeedingRepairs.push(customer)
  })

  // res.send(cleanedCustomersList)
  console.log('here\'s the good emails ...')
  console.log(cleanedCustomersList)
  console.log('here\'s a list of the bad emails ...')
  console.log(emailsNeedingRepairs)
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
