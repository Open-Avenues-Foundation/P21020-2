/* eslint-disable no-console */
const CSVToJSON = require('csvtojson')
const { cleaned } = require('./cleaned')
// const { createData } = require('../router/router')
const Customer = require('../models/customersModel')

// data controller will read the uplpoaded customer csv file
// convert into json object and pass the object to cleaned which is seperate logic 
// to clean the values of emails from any bad characters...
// once cleaning is done it will return cleaned customers instead of customers below


// our model will define the connection and the table we will use in the controller to bulk create the customers

const dataController = (req, res) => {
  CSVToJSON()
    .fromFile('./public/CSV-customers.csv')
    .then(async (customers) => {
      let cleanCustomers = cleaned(req, res, customers)
      // console.log(cleanCustomers)

      await Customer.bulkCreate(cleanCustomers)

      return res.send(cleanCustomers)
    })
    .catch((err) => {
      console.log(err)
    })
}

module.exports = { dataController }
