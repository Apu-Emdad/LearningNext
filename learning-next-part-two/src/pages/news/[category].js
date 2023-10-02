import React from 'react';

const ArticlesByCategory = ({ articles, category }) => {
  return (
    <div>
      <h1>Listed by category - {category}</h1>
      {articles.map((article) => (
        <div key={article.id}>
          <h3>
            {article.id} {article.title}
          </h3>
          <p>{article.description}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ArticlesByCategory;

export const getServerSideProps = async (context) => {
  const { params, req, res, query } = context;

  const { category } = params;
  const response = await fetch(`http://localhost:4000/news?category=${category}`);
  const data = await response.json();

  return {
    props: {
      articles: data,
      category,
    },
  };
};
