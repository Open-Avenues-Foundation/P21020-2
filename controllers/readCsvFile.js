/* eslint-disable no-console */
const CSVToJSON = require('csvtojson')
const { cleaned } = require('../logic/cleaned')


// data controller only reads the file, converts to json, pushes the info to cleaned 
// once emails are cleaned we should return the cleaned emails , as of now its returning 
// all emails before cleaning , clean model is not finished yet this is work in progress...
const dataController = (req, res) => {
  CSVToJSON()
    .fromFile('./public/CSV-customers.csv')
    .then((customers) => {
      return cleaned(req, res, customers)
    })
    .catch((err) => {
      // Log error if any
      console.log(err)
    })
}



module.exports = { dataController }
