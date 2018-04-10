import { commentMutations } from './resources/comment/comment.schema';
import { postMutations } from './resources/post/post.schema';
import { userMutations } from './resources/user/user.schema';

const Mutation: string = `
    type Mutation{ 
        ${userMutations}
        ${postMutations}
        ${commentMutations}
    }
`;

export {
    Mutation
}