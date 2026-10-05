import { useCommentCreate } from "../../api/commentApi";

export default function CommentsCreate({
    email,
    gameId,
    onCreate,
}) {
    const {create} = useCommentCreate();

    const commentAction = async (formData) => {
        const comment = formData.get('comment');

        const createdComment = await create(email, gameId, comment);

        onCreate(createdComment);
    };

    return (
        <article className="create-comment">
            <label>Add new comment:</label>
            <form className="form" action={commentAction}>
                <textarea name="comment" placeholder="Comment......"></textarea>
                <input className="btn submit" type="submit" value="Add Comment" />
            </form>
        </article>
    );
}