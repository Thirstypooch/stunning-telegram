const { ApolloServer } = require('apollo-server')
const gql = require('graphql-tag')
const mongoose = require('mongoose')

const typeDefs = gql`
  type Query {
    sayHi: String!
  }
`

const resolvers = {
  Query: {
    sayHi: () => 'Thirsty Pooch',
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

mongoose.connect()

server.listen({port: 5000}).then(res => {
  console.log(`🤖 at ${res.url}`);
})