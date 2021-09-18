const Message = require('../models/smsModel')

const saveMessage = async (req, res) => {
  const newMessage = {
    'phoneNumber': req.body.phoneNumber,
    'message': req.body.message,
    'status': req.body.status
  }

  console.log(newMessage)
  try {
    const saveNewMessage = await Message.create(message)

    return ('saved')
  }
  catch (err) {
    return ('there is an error' + err)
  }
}

module.exports = saveMessage
