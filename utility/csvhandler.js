const fs = require('fs')
const csv = require('fast-csv')
const customerModel = require('../models/customersModel')
const { error } = require('console')


const fileData = []
const CsvException = (message) => {
  this.message = message
  this.status = 400
}
const csvhandler = (req,res) => {
  fs.createReadStream(req.file.path).pipe(csv.parse({
    headers: ['email',
      'firstName',
      'lastName',
      'phoneNumber',
      'city',
      'state',
      'lastOrderPrice'
      , 'lastOrderDate'],
    renameHeaders: true
  })).on('error', error => {
    throw error.message
  }).on('data', (data) => {
    // cleanCSV data.email = cleanCSV(data.email) //
    // This santizes the data ***** TODO: Make cleanup function
    // const cleanData = cleanCSV(data)
    // fileData.push(cleanData)
    fileData.push(data)
  }).on('end', async () => {
    try {
      if (fileData.length === 0) {
        throw new CsvException('there is an error in your csv data, please check and try again ... ')
      }
      const results = await customerModel.bulkCreate(fileData, { validate: true })

      res.send("Success ....")
    } catch (error) {
      res.status(500).send('There are errors')
    }
  })
}

module.exports = csvhandler
