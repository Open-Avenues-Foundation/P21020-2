/* eslint-disable no-console */
require('dotenv').config()
const express = require('express')
const router = express.Router()
const { createMessage } = require('../controllers/smsController')

// router.get('/Messages', getAllMessages)

router.post('/CreateMessage', async (req, res) => {
  const { customerPhone, message } = req.body

  console.log(customerPhone, message)
  const newMessage = await createMessage(customerPhone, message)
})



module.exports = router


// const displayStatus = app {
//   app.post = ('/MessageStatus', (req, res) => {
//     const messageSid = req.body.MessageSid;
//     const messageStatus = req.body.MessageStatus;

//     console.log(`SID: ${messageSid}, Status: ${messageStatus}`);

//     res.sendStatus(200);
//   });
// }
