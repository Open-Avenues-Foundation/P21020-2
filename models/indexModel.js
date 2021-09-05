const CSVToJSON = require("csvtojson");
const indexModel = (req,res)=>{
    CSVToJSON()
        .fromFile("./public/CSV-customers.csv")
        .then((customers) => {
            return res.send(customers);
        })
        .catch((err) => {
            // Log error if any
            console.log(err);
        });
}

module.exports={indexModel}