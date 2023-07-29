const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Menu {
    name: String
    description: String
  }

  type Query {
    menu: Menu
  }
`
 
module.exports = typeDefs;