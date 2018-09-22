
exports.up = function(knex, Promise) {
    return knex.schema.createTable('contractors', function (table) {
      table.increments();
      table.string('licence');
      table.float('rating');
      table.integer('jobs_completed').unsigned();
      table.integer('neighbourhood_id');
    });
  };

  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('contractors');
  };