const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const agents = require('./routes/agents');
const customers = require('./routes/customers');
const port = process.env.PORT || 8081;


const app = express();

app.use(cors());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Headers', 'Authorization');
  next();
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/agents',agents);
app.use('/customers',customers);

app.listen(port);

module.exports = app;