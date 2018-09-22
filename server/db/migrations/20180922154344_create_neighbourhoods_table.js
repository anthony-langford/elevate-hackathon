
exports.up = function(knex, Promise) {
    return knex.schema.createTable('neighbourhoods', function (table) {
      table.increments();
      table.string('name');
      table.float('latitude');
      table.float('longitude');
      table.float('radius');
    })
  };

  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('neighbourhoods');
  };