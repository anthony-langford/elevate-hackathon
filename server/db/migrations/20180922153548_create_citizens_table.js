
exports.up = function(knex, Promise) {
    return knex.schema.createTable('citizens', function (table) {
      table.increments();
      table.string('name');
      table.string('phone');
      table.string('email');
      table.integer('neighbourhood_id').unsigned();
    });
  };

  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('citizens');
  };