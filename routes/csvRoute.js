require('dotenv').config()
const express = require('express')
const router = express.Router()
const upload = require('../middleware/upload')


router.post('/uploadcsv', upload.single('file'), async (req, res) => {
    console.log(req.file)

})



module.exports = router
