import React, { useState } from 'react';

const CommentPage = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');

  const fetchComments = async () => {
    const res = await fetch('/api/comments');
    const data = await res.json();
    setComments(data);
  };

  const handleLoadComments = async () => {
    await fetchComments();
  };

  const handleCommentInputChange = (e) => {
    setComment(e.target.value);
  };

  const postComment = async () => {
    const res = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ comment }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    console.log(data);
  };

  const handlePostComment = async () => {
    await postComment();
    await fetchComments();
  };

  const deleteComment = async (id) => {
    const res = await fetch(`/api/comments/${id}`, {
      method: 'DELETE',
    });
  };

  const handleDeleteComment = async (id) => {
    await deleteComment(id);
    await fetchComments();
  };

  return (
    <>
      <div>
        <input type='text' name='' id='' placeholder='write comment' onChange={(e) => handleCommentInputChange(e)} />
        <button type='submit' onClick={handlePostComment}>
          post
        </button>
        <hr />
        <br />
        <button onClick={handleLoadComments}>Load Comments</button>
        {comments.map((comment) => (
          <div key={comment.id}>
            <p>
              {comment.text} <button onClick={() => handleDeleteComment(comment.id)}>Delete</button>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default CommentPage;
