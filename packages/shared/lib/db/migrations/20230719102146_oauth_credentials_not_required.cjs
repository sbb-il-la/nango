const TABLE_NAME = '_nango_configs';

exports.up = function (knex, _) {
    return knex.schema.withSchema('nango').alterTable(TABLE_NAME, function (table) {
        table.string('oauth_client_id').alter().nullable().defaultTo(null);
        table.string('oauth_client_secret').alter().nullable().defaultTo(null);
        table.string('oauth_scopes').alter().nullable().defaultTo(null);
    });
};

exports.down = function (knex, _) {
    return knex.schema.withSchema('nango').alterTable(TABLE_NAME, function (table) {
        table.string('oauth_client_id').alter().notNullable();
        table.string('oauth_client_secret').alter().notNullable();
        table.string('oauth_scopes').alter().notNullable();
    });
};

