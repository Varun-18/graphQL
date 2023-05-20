const typeDefs = `#graphql

type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    favMovie(category: String!) : [Movie!]
}

type Movie{
    id: ID!
    name: String!
    released: Boolean!
    category: String!
}

type Query {
    users: [User!]!
    user(id : ID!): User!
}

input userAdditionInput{
    name: String!
    username: String!
    age: Int! 
}

input userUpdateInput{
    id: ID!
    username: String! 
}

type Mutation {
    addUser(input: userAdditionInput!) : User!
    updateUser(input: userUpdateInput!): User!
    deleteUser(id: ID!): User
}

`;

module.exports = { typeDefs };
