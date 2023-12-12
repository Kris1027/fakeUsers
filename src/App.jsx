import { useEffect } from 'react';
import { useState } from 'react';
import User from './components/User';
import AddUser from './components/AddUser';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    function fakeUsers() {
      fetch('https://reqres.in/api/users')
        .then((res) => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json();
        })
        .then((res) => {
          setData(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setIsLoading(false);
        });
    }

    fakeUsers();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    <p>Error: {error}</p>;
  }

  const handleAddUser = (newUser) => {
    const update = [...data, newUser];
    setData(update);
  };

  const deleteUser = (id) => {
    const update = data.filter((user) => user.id !== id);
    setData(update);
  };

  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-7xl text-center'>fakeUsers</h1>
      {data.map((user) => (
        <User
          key={user.id}
          first_name={user.first_name}
          last_name={user.last_name}
          onDelete={() => deleteUser(user.id)}
        />
      ))}

      <AddUser onAdd={handleAddUser} />
    </div>
  );
}

export default App;
