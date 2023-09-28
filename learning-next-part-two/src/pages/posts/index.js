import Link from 'next/link';
import React from 'react';

const Posts = ({ posts }) => {
  console.log('posts:', posts);
  return (
    <div>
      <h1>List of All Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`./posts/${post.id}`}>
            <h2>
              {post.id}: {post.title}
            </h2>
          </Link>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Posts;

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
  const data = await response.json();
  return {
    props: {
      posts: data,
    },
  };
};
