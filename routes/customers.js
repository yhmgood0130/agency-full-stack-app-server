const express = require('express');
const router = express.Router();
const queries = require('../db/queries')

router.get('/customers/:agentId', (req,res,next) => {
  let id = req.params.agentId;
  queries.getCustomers(id).then(customers => {
    res.status(200).json(customers);
  })
})

router.post('/customers', (req,res,next) => {
  let addCustomer = req.body;
  queries.addCustomer(addCustomer,id).then(customers => {
    res.status(200).json(customers[0]);
  })
})

router.put('/customers/:customerId', (req,res,next) => {
  let id = req.params.customerId;
  queries.modifyCustomer(id,req.body).then(customers => {
    res.status(200).json(customers[0]);
  })
})

router.delete('/customers/:customerId', (req,res,next) => {
  let id = req.params.customerId;
  queries.deleteCustomer(id).then(deleted => {
    message: 'Record deleted!'
  })
})
module.exports = router;
