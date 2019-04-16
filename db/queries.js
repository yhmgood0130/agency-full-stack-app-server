const knex = require ('./knex')

module.exports = {
  getAgents: function() {
    return knex('agents').select();
  },
  getCustomers: agentId => {
    return knex('customers').select().where('agent_id',agentId)
  },
  addAgent: function(agent){
    return knex('agents').insert(agent,'*');
  },
  addCustomer: function(customer){
    return knex('customers').insert(customer,'*');
  },
  modifyCustomer: function(customerId,updateInfo){
    return knex('customers').where('id',customerId).update(updateInfo)
  },
  deleteCustomer: function(customerId){
    return knex('customers').where('id',customerId).del();
  }
}
