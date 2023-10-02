import Link from 'next/link';

const NewsList = ({ articles }) => {
  return (
    <div>
      <h1>List of All News</h1>
      {articles.map((article) => (
        <Link key={article.id} href={`/news/${article.id}`}>
          <h2>
            {article.id} {article.title} {article.category}
          </h2>
        </Link>
      ))}
    </div>
  );
};

export default NewsList;

export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:4000/news');
  const data = await res.json();

  return {
    props: {
      articles: data,
    },
  };
};
