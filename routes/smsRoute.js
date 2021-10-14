const saveMessage = require('../controllers/smsController')
const smsRoute = app => {
  app.post = ('/save', (req, res) => {
    return saveMessage(req.body)
  })
}


module.exports = smsRoute
