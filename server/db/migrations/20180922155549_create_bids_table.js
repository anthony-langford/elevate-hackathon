
exports.up = function(knex, Promise) {
    return knex.schema.createTable('bids', function (table) {
      table.increments();
      table.integer('report_id').unsigned();
      table.integer('contractor_id').unsigned();
      table.float('bid_amount');
    });
  };

  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('bids');
  };