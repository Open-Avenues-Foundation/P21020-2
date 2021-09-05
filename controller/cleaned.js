const validator = require("email-validator");
const {custom} = require("joi");

const cleaned = (req, res, customers)=>{
    let myCleanedlist = {}
    const badEmailList = {}
    for (let i = 0; i < customers.length; i++) {
        console.log(customers[i].Email)
        if (validator.validate(customers[i].Email)) {
            console.log(`${ customers[i][1]} this customer has a valid email`)
            // myCleanedlist = myCleanedlist += customers[i]
        } else {
            console.log(`${ customers[i][1] } this customer has an unusual email ...`)
            // badEmailList = badEmailList += customers[i]
        }
    }
    console.log(myCleanedlist)
    console.log(badEmailList)
}

module.exports = {cleaned}
