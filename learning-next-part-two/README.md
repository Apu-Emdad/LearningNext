**Pages Involved**: pages/news/[category].js

In Next.js, `getServerSideProps` is a function used to fetch data on the server side and provide it as props to a page component. It's typically used for pages that need to display dynamic data based on the URL. Dynamic routes are routes where parts of the URL change, and `getServerSideProps` helps fetch the right data for these dynamic values.

In the example code, you have a dynamic route that can have different categories, such as `sports` or `politics`. The `getServerSideProps` function is responsible for fetching data based on the dynamic category from the URL and passing it as props to the page component.

```javascript
export const getServerSideProps = async (context) => {
  const { params } = context;
  console.log('params:', params);
  const { category } = params;
  const res = await fetch(`http://localhost:4000/news?category=${category}`);
  const data = await res.json();

  return {
    props: {
      articles: data,
      category,
    },
  };
};
```

When a user visits a page with a URL like `/news/sports` or `/news/politics`, Next.js will call `getServerSideProps`, fetch the data based on the dynamic category, and pass it as props to your page component. This allows you to render the page with the appropriate data for the requested category.
