const { usuarios, proximoId } = require('../data/db')

module.exports = {
    novoUsuario(_, args) { //  args = { nome, email, idade }
      const emailExistente = usuarios
        .some(u => u.email === args.email)

      if (emailExistente) {
        throw new Error('E-mail cadastrado')
      }

      const novo = {
      id: proximoId(),
      ...args, //    nome, email, idade
      perfil_id: 1,
e      status: 'ATIVO'
    }

    usuarios.push(novo)

    return novo
  },
  excluirUsuario(_, { id }) {
    const i = usuarios
      .findIndex(u => u.id === id)
    if (i < 0) return null
    const excluidos = usuarios.splice(i, 1)
    return excluidos ? excluidos[0] : null
  }
}