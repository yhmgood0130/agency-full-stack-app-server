const customers = require('../data/customers')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('customer').del()
    .then(function () {
      // Inserts seed entries
      return knex('customer').insert(customers);
    });
};