import './styles/comment.css';
import { useState, useEffect } from 'react';
import uuid from 'react-uuid';

const Comment = ({comments, newComment}) => {

    const [commentInp, setCommentInp] = useState("");

    useEffect(() => {

    }, [comments])
 
    const handleChange = (e) => { setCommentInp(e.target.value); };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!commentInp) { return; }
        let result = commentInp;
        setCommentInp("");
        return newComment(result);
    }

    return (
        <form className="comment-section flex" onSubmit={handleSubmit}>
            <h1 className='comment-label'>COMMENTS</h1>
            <div className="comment-wrapper flex">
                {comments && comments.length ?
                    comments.map(comment => <div className='comment flex' key={uuid()}>
                        <div className='comment-content'>{comment}</div>
                        <div className='comment-user'>Guest</div>
                    </div>)
                    :<div className="comment-default">No Comments to Display</div>
                }
            </div>
            <div className='comment-line'/>
            <div className='comment-submit flex'>
                <textarea
                    className='comment-input'
                    value={commentInp}
                    placeholder='Write Your Comment Here'
                    onChange={handleChange}
                />
                <button type="submit" className='btn'>Submit</button>
            </div>
        </form>
    )
}

export default Comment;