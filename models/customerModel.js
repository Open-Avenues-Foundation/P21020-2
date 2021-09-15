const Customers = (connection, Sequelize,) => {
    return connection.define('customers', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      name: { type: Sequelize.STRING, allowNull: false },
      email: { type: Sequelize.STRING },
      number: { type: Sequelize.STRING },
    }, { paranoid: true })
  }
/* eslint-disable no-console */
const sanitizeEmails = customer => {
    // return a customer with the email sanitized
    console.log(customer)
    const { email } = customer
    // !~/
    // const customer = { email: 'test@hi.com', phone_n: '111'}
    //
    //  SPREAD OPERATOR
    // ...customer
    // email: 'test@hi.com', phone_n: '111'
    //
    // {}
    // {...customer, email: 'hi@test.com'}
    // email: 'test@hi.com', phone_n: '111'
    // {email: 'test@hi.com', phn: 111, email: 'hi@test.com'}
    // {email: 'hi@test.com', phn: 111}
    console.log('Customer email', email)
    console.log('Customer email replaced', email.replace(',', ''))
    const newEmail = email.replace(',', '')
    return {
      ...customer,
      email: newEmail
    }
  }
  module.exports = sanitizeEmails, Customers 