
exports.up = function(knex, Promise) {

  return knex.schema.createTable('agent', (table) => {
    table.increments('_id');
    table.text("name",255).notNullable();
    table.text("address");
    table.text("city");
    table.text("state");
    table.text("zipCode");
    table.integer("tier");
    table.text("primary");
    table.text("mobile");
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('agent');

};
