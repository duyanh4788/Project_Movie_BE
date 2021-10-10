const { buildSchema } = require('graphql');

const graphqlSchema = buildSchema(`
    type  Client {
        id : Int!
        account: String!
        userName: String!
        email: String!
        phone: String!
        passWord: String!
        userTypeCode: String!
        avatar: String!
    }

    input InputClient {
        account: String!
        userName: String!
        email: String!
        phone: String!
        passWord: String!
        userTypeCode: String!
        avatar: String!
    }

    type rootMutation{
        createClient (inputClient : InputClient) : Client
    }

    type rootQuery{
        client(id : Int) : Client!
        clients : [Client]!
    }

    schema {
        query : rootQuery
        mutation : rootMutation
    }
`)

module.exports = {
    graphqlSchema
}