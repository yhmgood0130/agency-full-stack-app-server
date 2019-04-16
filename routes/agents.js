const express = require('express');
const router = express.Router();
const queries = require('../db/queries')

router.get('/agents', (req,res,next) => {
  queries.getAll().then(agents => {
    res.status(200).json(agents);
  })
})

router.post('/agents/:agentId', (req,res,next) => {
  let id = req.params.agentId;
  let addAgent = req.body;
  queries.addAgent(addAgent,id).then(cart => {
    res.status(200).json(cart[0]);
  })
})
module.exports = router;
