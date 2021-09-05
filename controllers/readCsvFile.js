const CSVToJSON = require('csvtojson')
const { cleaned } = require('../logic/cleaned')

const dataController = (req, res) => {
  CSVToJSON()
    .fromFile('./public/customers.csv')
    .then((customers) => {
      return cleaned(req, res, customers)
    })
    .catch((err) => {
      // Log error if any
      console.log(err)
    })
}



module.exports = { dataController }
