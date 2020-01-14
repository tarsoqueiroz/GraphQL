const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
  # Pontos de entrada da API
  type Query {
    ola: String
    horaAtual: String
  }
`

const resolvers = {
  Query: {
    ola() {
      return 'Ola!!!'
    },
    horaAtual() {
      return `${new Date()}`
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
