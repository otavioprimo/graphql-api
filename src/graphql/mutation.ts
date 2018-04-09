import { userMutations } from './resources/user/user.schema';

const Mutation: string = `
    type Mutation{ 
        ${userMutations}
    }
`;

export {
    Mutation
}