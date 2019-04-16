const agents = require('../data/agents')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('agent').del()
    .then(function () {
      // Inserts seed entries
      return knex('agent').insert(agents);
    });
};
