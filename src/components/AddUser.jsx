import { useState } from 'react';

import { FaUserPlus } from 'react-icons/fa6';

export default function AddUser({ onAdd }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleAddUser = (e) => {
    e.preventDefault();

    if (firstName.trim() === '' || lastName.trim() === '')
      return alert('Please fill the fields');

    const randomId = Math.floor(Math.random() * 100);

    const newUser = {
      id: randomId,
      first_name: firstName,
      last_name: lastName,
    };

    onAdd(newUser);

    setFirstName('');
    setLastName('');
  };

  return (
    <form className='flex gap-2' onSubmit={handleAddUser}>
      <input
        className='focus:outline-none text-rose-950 bg-rose-100 dark:text-rose-100 dark:bg-pink-900 p-2 rounded-md'
        type='text'
        placeholder='First name'
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        className='focus:outline-none text-rose-950 bg-rose-100 dark:text-rose-100 dark:bg-pink-900 p-2 rounded-md'
        type='text'
        placeholder='Last name'
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <button
        className='text-2xl hover:scale-110 active:scale-90 text-rose-950 dark:text-rose-200'
        type='submit'
      >
        <FaUserPlus />
      </button>
    </form>
  );
}
