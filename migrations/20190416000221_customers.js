
exports.up = function(knex, Promise) {

  return knex.schema.createTable('customer', (table) => {
    table.increments('_id');
    table.text("agent_id");
    table.text("firstName",255).notNullable();
    table.text("lastName",255).notNullable();
    table.text("balance");
    table.text("guid",255);
    table.boolean("isActive");
    table.integer("age");
    table.text("eyeColor");
    table.text("company");
    table.text("email");
    table.text("phone");
    table.text("address");
    table.text("registered");
    table.text("latitude");
    table.text("longitude");
    table.specificType("tags", 'TEXT[]');
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('customer');

};