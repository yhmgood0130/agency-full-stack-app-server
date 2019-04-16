const express = require('express');
const router = express.Router();
const queries = require('../db/queries')

router.get('/agents', (req,res,next) => {
  queries.getAgents().then(agents => {
    res.status(200).json(agents);
  })
})

router.get('/agents/:agentId', (req,res,next) => {
  let id = req.params.agentId;
  queries.getAgentById(id).then(agent => {
    res.status(200).json(agent);
  })
})

router.get('/agents/:agentId/customers', (req,res,next) => {
  let id = req.params.agentId;
  queries.getCustomersByAgentId(id).then(customers => {
    res.status(200).json(customers);
  })
})

router.post('/agents', (req,res,next) => {
  let id = req.params.agentId;
  let addAgent = req.body;
  queries.addAgent(addAgent).then(cart => {
    res.status(200).json(cart[0]);
  })
})
module.exports = router;
