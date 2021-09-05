const { indexModel } = require('../model/indexModel')
const getIndexController = (req,res)=>{
    return indexModel(req,res)
}

module.exports = { getIndexController }