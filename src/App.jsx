import { useEffect } from 'react';
import { useState } from 'react';

import { GiBoomerangSun, GiMoonBats } from 'react-icons/gi';

import User from './components/User';
import AddUser from './components/AddUser';
import clsx from 'clsx';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [darkMode, setDarkMode] = useState(false);

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
    return <p>Error: {error}</p>;
  }

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const body = document.body;
  if (darkMode) {
    body.style.backgroundColor = 'black';
  } else {
    body.style.backgroundColor = 'pink';
  }

  const handleAddUser = (newUser) => {
    const update = [...data, newUser];
    setData(update);
  };

  const handleDeleteUser = (id) => {
    fetch(`https://reqres.in/api/users/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const update = data.filter((user) => user.id !== id);
        setData(update);
        console.log('Success:', response);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleUpdateUser = (id, updatedUserData) => {
    const update = data.map((user) =>
      user.id === id ? { ...user, ...updatedUserData } : user
    );
    setData(update);
  };

  return (
    <div className={clsx(darkMode && 'dark')}>
      <div className='flex flex-col items-center'>
        <h1 className='text-7xl text-center dark:text-violet-900 text-violet-500 font-extrabold flex gap-10 p-4'>
          fakeUsers
          <button onClick={toggleTheme}>
            {darkMode ? <GiMoonBats /> : <GiBoomerangSun />}
          </button>
        </h1>
        {data.map((user) => (
          <User
            key={user.id}
            first_name={user.first_name}
            last_name={user.last_name}
            onDelete={() => handleDeleteUser(user.id)}
            onUpdate={(updatedUserData) =>
              handleUpdateUser(user.id, updatedUserData)
            }
          />
        ))}

        <AddUser onAdd={handleAddUser} />
      </div>
    </div>
  );
}

export default App;
