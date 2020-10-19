const User = require('../../models/User')

module.exports = {
  Mutation: {
    register(_, args, context, info){
      // TODO: Validate user data
      // TODO: Make sure user does not already exists
      // TODO: hash password and create auth token
    }
  }
}