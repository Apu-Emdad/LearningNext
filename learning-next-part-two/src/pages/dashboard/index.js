import useSWR from 'swr';

const fetcher = async () => {
  const res = await fetch('http://localhost:4000/dashboard');
  const data = await res.json();
  return data;
};

const Dashboard = () => {
  const { data, isLoading, error } = useSWR('/dashboard', fetcher);
  console.log('data:', data);
  console.log('isLoading:', isLoading);
  if (isLoading) {
    return <h1>Loading....</h1>;
  }
  return (
    <div>
      <h1>SWR Dashboard</h1>
      <h2>Posts- {data.posts}</h2>
      <h2>likes-{data.likes}</h2>
      <h2>Followers - {data.followers}</h2>
      <h2>Following {data.following}</h2>
    </div>
  );
};

export default Dashboard;
