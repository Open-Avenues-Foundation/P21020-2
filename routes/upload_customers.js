const uploadCsv = require('../controllers/customer.js');

const express = require('express');

// Move the routes here
const routes = app => {
  //app.get('/', getindex);
  //app.get('/customers', getAllCustomers);

  // What type of route do we need to create to send data to the server?
  app.post('/upload', (req, res) => {
    // Customer is an array of customer obj
    const customers = req.body;
    uploadCsv(customers); // []
    res.send('upload successful');
  });
};

module.exports = routes;
