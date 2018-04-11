import { DbConnection } from "../../../interfaces/DbConnectionInterface";
import { GraphQLResolveInfo } from "graphql";

export const commentResolvers = {

    Comment:{

    },

    Query: {
        comments: (parent, { postId, first = 10, offset = 0 }, { db }: { db: DbConnection }, info: GraphQLResolveInfo) => {
            return db.Comment.findAll({
                where: { post: postId },
                limit: first,
                offset: offset
            });
        },

    }
};