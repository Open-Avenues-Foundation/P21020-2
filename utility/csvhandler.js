const fs = require('fs')
const cvs = require('fast-csv')
const models = require('../models')
const { error } = require('console')

const fileData = []
const CsvException = (message) => {
  this.message = message
  this.status = 400
}
const csvhandler = () => {
  fs.createReadStream(path).pipe(csv.parse({
    headers: ['email',
      'firstName',
      'lastName',
      'phoneNumber',
      'city',
      'state',
      'lastOrderPrice'
      , 'lastOrder'],
    renameHeaders: true
  })).on('error', error => {
    throw error.message
  }).on('data', (data) => {
    fileData.push(data)
  }).on('end', async () => {
    try {
      if (fileData.length === 0) {
        throw new CsvException('there is an error in your csv data, please check and try again ... ')
      }
      const results = await models.customersModel.bulkCreate(fileData, { validate: true })

      console.log(results)
    } catch (error) {
      console.log(error)
    }
  })
}

module.exports = csvhandlder
