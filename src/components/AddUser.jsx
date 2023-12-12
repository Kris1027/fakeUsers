import { useState } from 'react';

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
    <form onSubmit={handleAddUser}>
      <input
        className='focus:outline-none'
        type='text'
        placeholder='First name'
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        className='focus:outline-none'
        type='text'
        placeholder='Last name'
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <button type='submit'>add</button>
    </form>
  );
}
