import { useEffect } from 'react';
import { useState } from 'react';

import { useData } from './contexts/dataContext';

import clsx from 'clsx';
import { GiBoomerangSun, GiMoonBats } from 'react-icons/gi';

import User from './components/User';
import AddUser from './components/AddUser';
import useDeleteUser from './hooks/useDeleteUser';

function App() {
  const { data, setData } = useData();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [darkMode, setDarkMode] = useState(false);

  const DeleteUser = useDeleteUser();

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
  }, [setData]);

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
            onDelete={() => DeleteUser(user.id)}
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
