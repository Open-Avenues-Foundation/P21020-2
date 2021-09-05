const { indexModel } = require('../models/indexModel.js')
const getIndexController = (req,res)=>{
    return indexModel(req,res)
}

module.exports = { getIndexController }