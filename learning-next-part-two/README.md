**Pages Involved**: pages/dashboard/index.js

```
import useSWR from 'swr';

// Define a fetcher function for data fetching
const fetcher = async () => {
  const res = await fetch('http://localhost:4000/dashboard');
  const data = await res.json();
  return data;
};

const Dashboard = () => {
  // Use useSWR to fetch data from '/dashboard' endpoint using the fetcher function
  const { data, isLoading, error } = useSWR('/dashboard', fetcher);

  console.log('data:', data);
  console.log('isLoading:', isLoading);

  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  return (
    <div>
      <h1>SWR Dashboard</h1>
      <h2>Posts - {data.posts}</h2>
      <h2>Likes - {data.likes}</h2>
      <h2>Followers - {data.followers}</h2>
      <h2>Following - {data.following}</h2>
    </div>
  );
};

export default Dashboard;


```

# Overview

In this example, the `useSWR` hook accepts two parameters: a key string and a fetcher function. The key serves as a unique identifier for the data, typically representing the API URL, and it is passed as an argument to the fetcher function. The fetcher function can be any asynchronous function responsible for fetching the data, and it can use native `fetch` or third-party libraries like Axios.

The `useSWR` hook returns three values based on the status of the data request:

- `data`: The actual data retrieved from the API.
- `isLoading`: A boolean that indicates whether the data is currently being loaded.
- `error`: An error object, if an error occurs during the data fetching process.

These three values allow you to easily manage and display data while providing feedback to the user about the loading status or any potential errors.

# Features

With just one single line of code, you can simplify the logic of data fetching in your project, and also have all these amazing features out-of-the-box:

- Fast, lightweight, and reusable data fetching
- Built-in cache and request deduplication
- Real-time experience
- Transport and protocol agnostic
- Server-Side Rendering (SSR) / Incremental Static Regeneration (ISR) / Static Site Generation (SSG) support
- TypeScript ready
- React Native support

SWR has you covered in all aspects of speed, correctness, and stability to help you build better experiences:

- Fast page navigation
- Polling on interval
- Data dependency
- Revalidation on focus
- Revalidation on network recovery
- Local mutation (Optimistic UI)
- Smart error retry
- Pagination and scroll position recovery
- React Suspense
