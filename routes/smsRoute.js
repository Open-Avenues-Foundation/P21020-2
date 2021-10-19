/* eslint-disable no-console */
require('dotenv').config()
const express = require('express')
const router = express.Router()
const { saveMessage, sendMessage } = require('../controllers/smsController')



router.post('/CreateMessage', async (req, res) => {
  const{customerPhone, message} = req.body
  console.log(process.env.TWILIO_ACCOUNT_SID)
  const savedMessage = await saveMessage(customerPhone, message)
  const sentMessage = await sendMessage(customerPhone, message)
})


// const displayStatus = app {
//   app.post = ('/MessageStatus', (req, res) => {
//     const messageSid = req.body.MessageSid;
//     const messageStatus = req.body.MessageStatus;

//     console.log(`SID: ${messageSid}, Status: ${messageStatus}`);

//     res.sendStatus(200);
//   });
// }

module.exports = router
