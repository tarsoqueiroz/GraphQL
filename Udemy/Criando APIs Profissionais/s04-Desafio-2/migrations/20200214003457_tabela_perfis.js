
exports.up = (knex, Promise) => {
  return knex.schema.createTable('perfis', table => {
      table.increments('id').primary()
      table.string('nome').notNull().unique()
      table.string('rotulo').notNull()
  }).then( () => {
      return knex('perfis').insert([
          { nome: 'comum',  rotulo: 'Comum' },
          { nome: 'admin',  rotulo: 'Administrador' },
          { nome: 'master', rotulo: 'Master' },
      ])
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('perfis')
}