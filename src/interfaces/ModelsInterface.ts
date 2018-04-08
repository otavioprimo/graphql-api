import { CommentModel } from './../Models/CommentModel';
import { PostModel } from './../Models/PostModel';
import { UserModel } from './../Models/UserModel';
export interface ModelsInterface {

    User: UserModel;
    Post: PostModel;
    Comment: CommentModel;
}