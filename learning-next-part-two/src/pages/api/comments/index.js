import { comments } from '../../../../data/comment';

const handler = (req, res) => {
  if (req.method === 'GET') {
    res.json(comments);
  } else if (req.method === 'POST') {
    const comment = req.body.comment;
    const newComment = {
      id: Date.now(),
      text: comment,
    };
    comments.push(newComment);
    res.status(201).json(newComment);
  }
};

export default handler;
