/* eslint-disable no-console */
const customers = require('../data/customerModel')

const getindex = (req, res) => {
  return res.send('hi this is the homepage')
}

const getAllCustomers = (req, res) => {
  return res.send(customers)
}

const sanitizeEmails = (req, res) => {
  const specialChars = '!@#$%^&*()?/~`.,+=-_:;"'
  let allEmails = []
  let cleanedEmail = []

  customers.forEach(customer => {
    allEmails.push([cusotomer.A])
  })

  allEmails.forEach(email => {
    console.log(email[0])
    const regex = /[!#$%^&*(),?":{}|<>]/g
    const regex2 = /(\s)/g
    let cleand = email[0].replace(regex, '')

    cleanedEmail.push(cleaned)
  })

  res.send(cleanedEmail)
}

const uploadCsv = (req, res) => {
  return res.send('hi this is the homepage')
}

module.exports = { getindex, getAllCustomers, uploadCsv, sanitizeEmails }
