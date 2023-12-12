import { useEffect } from 'react';
import { useState } from 'react';
import User from './components/User';

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

  return (
    <div>
      {data.map((user) => (
        <User
          key={user.id}
          first_name={user.first_name}
          last_name={user.last_name}
        />
      ))}
    </div>
  );
}

export default App;
