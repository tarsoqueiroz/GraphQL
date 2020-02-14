
const { client, connection } = require('./.env')

module.exports = {

  client,
  connection,
  migrations: {
    tableName: 'knex_migrations'
  },
  useNullAsDefault: true

};
