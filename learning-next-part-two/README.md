**Pages Involved**: pages/news/index.js

In Next.js, `getServerSideProps` is a special asynchronous function that allows you to fetch data on the server side before rendering a page. This function is used to pre-render a page with data fetched from an external source, such as a database or an API, and it runs on the server each time a request is made to the page. It's commonly used for pages that require dynamic data that can change frequently or for pages that need to fetch data during the server-side rendering (SSR) process.

```javascript
export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:4000/news');
  const data = await res.json();

  return {
    props: {
      articles: data,
    },
  };
};
```

When a user visits a page using `getServerSideProps`, Next.js fetches data on the server side and sends it as props to the `NewsList` component. This enables the page to be pre-rendered with the most up-to-date news data for each request.
