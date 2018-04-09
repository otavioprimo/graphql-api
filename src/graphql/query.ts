import { userQueries } from './resources/user/user.schema';

const Query: string = `
    type Query{
        ${userQueries}
    }
`;

export {
    Query
}