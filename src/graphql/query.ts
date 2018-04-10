import { commentQueries } from './resources/comment/comment.schema';
import { postQueries } from './resources/post/post.schema';
import { userQueries } from './resources/user/user.schema';

const Query: string = `
    type Query{
        ${userQueries}
        ${postQueries}
        ${commentQueries}
    }
`;

export {
    Query
}