import React from 'react';

const Users = ({ users }) => {
  console.log('users:', users);
  return (
    <div>
      <h1>List of users</h1>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/');
  const data = await response.json();
  console.log('data:', data);
  return {
    props: {
      users: data,
    },
  };
};
/* 
getStaticProps is allowed only in page and cannot be run from a regular component file
It is used only for pre-rendering and not client-side data fetching
*/
