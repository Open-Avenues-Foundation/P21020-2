/* eslint-disable no-console */
require('dotenv').config()
const Message = require('../models/smsModel')

const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN)

const saveMessage = async (number, message) => {
  return await Message.create({
    message: message,
    phoneNumber: number,
    messageStatus: 'Undelivered',
  })
}


const sendMessage = async (number, message) => {
  client.messages
    .create({
      from: process.env.TWILIO_PHONE_NUMBER,
      to: `+1${number}`,
      body: message
    })
    .then(() => {
      console.log('success')
    })
    .catch(err => {
      console.log(err)
    })
}

module.exports = { saveMessage, sendMessage }
