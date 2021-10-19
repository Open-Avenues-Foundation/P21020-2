/* eslint-disable no-console */
require('dotenv').config()
const Message = require('../models/smsModel')

const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN)

const createMessage = async (number, message) => {
  client.messages
    .create({
      from: process.env.TWILIO_PHONE_NUMBER,
      to: `+1${number}`,
      body: message
    })
    .then(async () => {
      console.log('success')

      return await Message.create({
        message: message,
        phoneNumber: number,
        messageStatus: 'Delivered',
      })
    })
    .catch(err => {
      console.log(err)
    })
}

module.exports = { createMessage }

/* eslint-disable no-console */
// require('dotenv').config()
// const { text } = require('express')
// const Customer = require('../models/customersModel')
// const Message = require('../models/smsModel')
// const models = require('../models')

// const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID,
//   process.env.TWILIO_AUTH_TOKEN)

// const getAllMessages = async (req, res) => {
//   const messages = await models.Message.findAll()

//   return res.send(messages)
// }

// const createMessage = async (req, res) => {
//   const { to, body } = req.body

//   res.header('Content-Type', 'application/json')
//   models.Message
//     .create({
//       messageRecipient: to,
//       messageBody: body,
//       messageStatus: 'Undelivered'
//     })
//     .then(({ dataValues, dataValues: { id } }) => {
//       client.messages
//         .create({
//           from: process.env.TWILIO_PHONE_NUMBER,
//           to,
//           body
//         })
//         .then(async () => {
//           console.log(dataValues)
//           await models.Message.update({ messageStatus: 'successful' }, { where: { id } })
//           res.send(JSON.stringify({ success: true }))
//         })
//         .catch(err => {
//           console.log(err)
//           models.Message.update({ messageStatus: 'undelivered' }, { where: { id } })

//           return res
//             .status(400)
//             .send('We could not send the text message')
//         })
//     })
//     .catch(err => {
//       return res.status(400).send('We could not save the text message!')
//     })
// }

// module.exports = { createMessage, getAllMessages }
