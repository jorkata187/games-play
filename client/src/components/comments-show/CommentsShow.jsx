export default function CommentsShow({
    comments,
}) {
    return (
        <div className="details-comments">
            <h2>Comments:</h2>
            <ul>
                {/* <!-- list all comments for current game (If any) --> */}
                {comments.length > 0
                    ? comments.map(comment => (
                        <li key={comment._id} className="comment">
                            <p>{comment.email}: {comment.comment}</p>
                        </li>
                    ))
                    : <p className="no-comment">No comments.</p>
                }
            </ul>
        </div>
    );
}