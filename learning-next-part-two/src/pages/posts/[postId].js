import React from 'react';

const Post = ({ post }) => {
  return (
    <div>
      <h2>
        {post.id}: {post.title}
      </h2>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;

export const getStaticPaths = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
  const data = await response.json();
  const paths = data.map((post) => ({ params: { postId: `${post.id}` } }));
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  console.log('context:', context);
  console.log('params:', params);
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
  const data = await response.json();
  console.log('data:', data);
  return {
    props: {
      post: data,
    },
  };
};
