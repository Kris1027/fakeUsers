import useFetchUsers from '../hooks/useFetchUsers';
import { useData } from '../contexts/dataContext';
import { useTheme } from '../contexts/themeContext';
import clsx from 'clsx';
import { GiBoomerangSun, GiMoonBats } from 'react-icons/gi';
import User from '../components/User';
import AddUser from '../components/AddUser';

export default function FakeUsers() {
  const { data } = useData();
  const { darkMode, toggleTheme } = useTheme();

  useFetchUsers();

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
            id={user.id}
            first_name={user.first_name}
            last_name={user.last_name}
          />
        ))}
        <AddUser />
      </div>
    </div>
  );
}
