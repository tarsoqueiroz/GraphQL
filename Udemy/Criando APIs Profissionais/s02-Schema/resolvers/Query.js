const { usuarios, perfis } = require('../data/db')

module.exports = {

  ola() {
    return 'Ola!!!'
  },
  horaAtual() {
    return `${new Date()}`
  },
  horaDeAgora() {
    return new Date()
  },
  usuarioLogado(obj) {
    console.log(obj)
    return {
      id: 1,
      nome: 'Ana da Web',
      email: 'anadaweb@email.com',
      idade: 23,
      salario_real: 1234.56,
      vip: true
    }
  },
  produtoEmDestaque(produto) {
    console.log(produto)
    return {
      id: 2,
      nome: 'computer',
      preco: 1000.10,
      desconto: 0
    }
  },
  numerosMegaSena() {
    const crescente = (a, b) => a - b
    return Array(6).fill(0)
      .map(n => parseInt(Math.random() * 60 + 1))
      .sort(crescente)
    // return [4, 8, 13, 2, 33, 54]
  },
  usuarios() {
    return usuarios
  },
  usuario(_, args) {
    const sels = usuarios
      .filter(u => u.id == args.id)
    return sels ? sels[0] : null
  },
  perfis() {
    return perfis
  },
  perfil(_, { id }) {
    const sels = perfis
      .filter(p => p.id == id)
    return sels ? sels[0] : null
  }

}