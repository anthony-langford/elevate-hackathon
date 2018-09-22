
exports.up = function(knex, Promise) {
    return knex.schema.createTable('reports', function (table) {
      table.increments();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.float('latitude');
      table.float('longitude');
      table.string('image_url');
      table.string('description');
      table.boolean('safety_hazard');
      table.integer('upvotes').defaultTo(0);
      table.integer('downvotes').defaultTo(0);
      table.enu('category', ['Waste Collection', 'Roads', 'Water', 'Trees and Animals', 'Property', 'Winter']);
      table.enu('status', ['Open', 'In Progress', 'Cancelled', 'Closed']);
      table.integer('citizen_id').unsigned();
      table.integer('neighbourhood_id').unsigned();
    });
  };

  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('reports');
  };