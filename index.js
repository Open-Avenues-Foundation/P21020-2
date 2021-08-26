const express = require('express');
const app = express();
const port = 7000;
const routes = require('./routes/upload_customers.js');

app.use(express.json());

routes(app);

app.listen(port, () => {
  console.log('your server feels mights running on port: ' + port);
});
