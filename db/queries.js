const knex = require ('./knex')

module.exports = {
  getAgents: function() {
    return knex('agent').select();
  },
  getAgentById: function(agentId) {
    return knex('agent').select().where('_id',agentId);
  },
  getCustomers: function() {
    return knex('customer').select();
  },
  getCustomerById: customerId => {
    return knex('customer').select().where('_id',customerId)
  },
  getCustomersByAgentId: agentId => {
    return knex('customer').select().where('agent_id',agentId)
  },
  addAgent: function(agent){
    return knex('agent').insert(agent,'*');
  },
  addCustomer: function(customer){
    return knex('customer').insert(customer,'*');
  },
  modifyAgent: function(updateInfo,agentId){
    return knex('agent').where('_id',agentId).update(updateInfo)
  },
  modifyCustomer: function(customerId,updateInfo){
    return knex('customer').where('_id',customerId).update(updateInfo)
  },
  deleteCustomer: function(customerId){
    return knex('customer').where('_id',customerId).del();
  }
}
