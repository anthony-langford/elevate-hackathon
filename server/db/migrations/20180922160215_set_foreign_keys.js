
exports.up = function(knex, Promise) {

    return knex.schema.table('reports', function (table) {
        table.foreign('citizen_id').references('citizens.id');
        table.foreign('neighbourhood_id').references('neighbourhoods.id');
    })
    .then(() => {
        return knex.schema.table('citizens', function (table) {
            table.foreign('neighbourhood_id').references('neighbourhoods.id');
        })
    })
    .then(() => {
        return knex.schema.table('bids', function (table) {
            table.foreign('report_id').references('reports.id');
            table.foreign('contractor_id').references('contractors.id');
        })
    })
};

exports.down = function(knex, Promise) {

    return knex.schema.table('reports', function (table) {
        table.dropForeign('citizen_id');
        table.dropForeign('neighbourhood_id');
    })
    .then(() => {
        return knex.schema.table('citizens', function (table) {
            table.dropForeign('neighbourhood_id');
        })
    })
    .then(() => {
        return knex.schema.table('bids', function (table) {
            table.dropForeign('report_id');
            table.dropForeign('contractor_id');
        })
    })
    
};
