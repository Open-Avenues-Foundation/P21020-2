require('dotenv').config()
const express = require('express')
const router = express.Router()
const upload = require('../middleware/upload')
const csvHandler = require('../utility/csvhandler')

router.post('/', upload.single('file'), csvHandler) 




module.exports = router
