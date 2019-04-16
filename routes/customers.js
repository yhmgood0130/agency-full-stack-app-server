const express = require('express');
const router = express.Router();
const queries = require('../db/queries')

router.get('/', (req,res,next) => {
  queries.getCustomers().then(customers => {
    res.status(200).json(customers);
  })
})

router.get('/:customerId', (req,res,next) => {
  let id = req.params.customerId;
  queries.getCustomerById(id).then(customer => {
    res.status(200).json(customer);
  })
})

router.post('/', (req,res,next) => {
  let addCustomer = req.body;
  queries.addCustomer(addCustomer).then(customers => {
    res.status(200).json(customers[0]);
  })
})

router.put('/:customerId', (req,res,next) => {
  let id = req.params.customerId;
  queries.modifyCustomer(id,req.body).then(customers => {
    res.status(200).json(customers[0]);
  })
})

router.delete('/:customerId', (req,res,next) => {
  let id = req.params.customerId;
  queries.deleteCustomer(id).then(deleted => {
    res.status(200).json({ _id: id });
  })
})
module.exports = router;
