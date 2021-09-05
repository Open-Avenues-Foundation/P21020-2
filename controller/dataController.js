const CSVToJSON = require("csvtojson");
const { cleaned } = require("../controller/cleaned");

const dataController = (req, res) => {
    CSVToJSON()
        .fromFile("./public/CSV-customers.csv")
        .then((customers) => {
            /*
       * Users is a JSON array
       * Log the JSON array
       */
            // console.log(customers)
            return cleaned(req, res, customers);
        })
        .catch((err) => {
            // Log error if any
            console.log(err);
        });
};

module.exports = { dataController };
