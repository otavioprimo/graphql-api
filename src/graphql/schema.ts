import { makeExecutableSchema } from 'graphql-tools';

const users: any[] = [
    {
        id: 1,
        name: 'Jon',
        email: 'jon@email.com'
    },
    {
        id: 2,
        name: 'Perera',
        email: 'perera@email.com'
    }
];

const typeDefs = `
    type User {
        id: ID!
        name: String!
        email: String!
    }

    type Query {
        allUsers:[User!]!
    }
`;

const resolvers = {
    Query: {
        allUsers: () => users
    }
};

export default makeExecutableSchema({ typeDefs, resolvers });