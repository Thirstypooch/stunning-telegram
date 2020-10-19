const { ApolloServer } = require('apollo-server')
const mongoose = require('mongoose')

const typeDefs = require('./graphql/TypeDefs')
const resolvers = require('./graphql/resolvers')
const Post = require('./models/Post')
const { MONGO_DB } = require('./config')

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

mongoose
  .connect(MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Mongo DB 🍾')
    return server.listen({ port: 5000 })
  })
  .then((res) => {
    console.log(`🤖 at ${res.url}`)
  })
