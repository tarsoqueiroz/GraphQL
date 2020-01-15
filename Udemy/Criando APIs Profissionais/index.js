const { ApolloServer, gql } = require('apollo-server')

const perfis = [
  { id: 1, nome: 'comum' },
  { id: 2, nome: 'administrador' },
]

const usuarios = [{
  id: 1,
  nome: 'João Silva',
  email: 'joaosilva@gmail.com',
  idade: 29  
},{
  id: 2,
  nome: 'Rafael Junior',
  email: 'rafaeljr@mail.com',
  idade: 31  
},{
  id: 3,
  nome: 'Daniela Smith',
  email: 'd.smith@tmail.com',
  idade: 24 
}]

const typeDefs = gql`
  scalar Date

  type Produto {
    id: ID
    nome: String!
    preco: Float!
    desconto: Float
    precoComDesconto: Float
  }

  type Perfil {
    id: Int
    nome: String
  }
  
  type Usuario {
    id: ID
    nome: String!
    email: String!
    idade: Int
    salario: Float
    vip: Boolean
  }

  # Pontos de entrada da API
  type Query {
    ola: String!
    horaAtual: String!
    horaDeAgora: Date!
    usuarioLogado: Usuario
    produtoEmDestaque: Produto
    numerosMegaSena: [Int!]!
    usuarios: [Usuario]
    usuario(id: ID): Usuario
    perfis: [Perfil]
    perfil(id: Int): Perfil
  }
`

const resolvers = {
  Usuario: {
    salario(usuario) {
      return usuario.salario_real
    }
  },
  Produto: {
    precoComDesconto(produto) {
      if(produto.desconto) {
        return produto.preco * (1 - produto.desconto / 100.0)
      } else {
        return produto.preco
      }
    }
  },
  Query: {
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
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({ url }) => {
  console.log(`Executando em ${url}`)
})
