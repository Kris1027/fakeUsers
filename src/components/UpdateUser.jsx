import { useState } from 'react';

import { MdOutlineCheckCircle, MdClose } from 'react-icons/md';

export default function UpdateUser({
  id,
  first_name,
  last_name,
  onUpdate,
  setShowEdit,
}) {
  const [updatedFirstName, setUpdatedFirstName] = useState(first_name);
  const [updatedLastName, setUpdatedLastName] = useState(last_name);

  const handleEditUser = (e) => {
    e.preventDefault();

    const upadtedUser = {
      first_name: updatedFirstName,
      last_name: updatedLastName,
    };

    fetch(`https://reqres.in/api/users/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(upadtedUser),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        onUpdate(upadtedUser);
        setShowEdit(false);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <form className='flex gap-2' onSubmit={handleEditUser}>
      <input
        className='focus:outline-none text-rose-950 bg-rose-100 dark:text-rose-100 dark:bg-pink-900 p-2 rounded-md w-full sm:w-auto'
        value={updatedFirstName}
        onChange={(e) => setUpdatedFirstName(e.target.value)}
        type='text'
        placeholder='First name'
      />
      <input
        className='focus:outline-none text-rose-950 bg-rose-100 dark:text-rose-100 dark:bg-pink-900 p-2 rounded-md w-full sm:w-auto'
        value={updatedLastName}
        onChange={(e) => setUpdatedLastName(e.target.value)}
        type='text'
        placeholder='Last name'
      />
      <button
        className='text-2xl hover:scale-110 active:scale-90'
        onClick={() => setShowEdit(false)}
      >
        <MdClose />
      </button>
      <button
        className='text-2xl hover:scale-110 active:scale-90'
        type='submit'
      >
        <MdOutlineCheckCircle />
      </button>
    </form>
  );
}
