const express = require('express');
const app = express();
const PORT = 7000;
const routes = require('./routes/upload_customers.js');

app.use(express.json());

routes(app);

app.listen(port, () => {
  console.log(`server is running on ${ PORT }`);
});
