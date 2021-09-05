/* eslint-disable no-console */
const CSVToJSON = require('csvtojson')


// index model here is reading a file  and returning response customers listed in the file
// instead we should be reading from the database if it has info 
// also display a mesg if it does not have info
const indexModel = (req, res) => {
  CSVToJSON()
    .fromFile('./public/CSV-customers.csv')
    .then((customers) => {
      return res.send(customers)
    })
    .catch((err) => {
      // Log error if any
      console.log(err)
    })
}

module.exports = { indexModel }
