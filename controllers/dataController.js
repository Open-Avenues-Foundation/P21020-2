/* eslint-disable no-console */
const CSVToJSON = require('csvtojson')
const { cleaned } = require('./cleaned')


// data controller will read the uplpoaded customer csv file
// convert into json object and pass the object to cleaned which is seperate logic 
// to clean the values of emails from any bad characters...
// once cleaning is done it will return cleaned customers instead of customers below

const dataController = (req, res) => {
  CSVToJSON()
    .fromFile('./public/CSV-customers.csv')
    .then((customers) => {
      /*
       * Users is a JSON array
       * Log the JSON array
       */
      // console.log(customers) for now later we should return cleaned customers list not the original customers 
      return cleaned(req, res, customers)
    })
    .catch((err) => {
      // Log error if any
      console.log(err)
    })
}

module.exports = { dataController }
