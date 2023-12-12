import { useState } from 'react';

import { MdOutlineCheckCircle, MdClose } from 'react-icons/md';

export default function UpdateUser({
  first_name,
  last_name,
  onUpdate,
  setShowEdit,
}) {
  const [updatedFirstName, setUpdatedFirstName] = useState(first_name);
  const [updatedLastName, setUpdatedLastName] = useState(last_name);

  const handleEditUser = (e) => {
    e.preventDefault();
    onUpdate({ first_name: updatedFirstName, last_name: updatedLastName });
    setShowEdit(false);
  };

  return (
    <form className='flex gap-2' onSubmit={handleEditUser}>
      <input
        className='focus:outline-none text-rose-950 bg-rose-100 dark:text-rose-100 dark:bg-pink-900 p-2 rounded-md'
        value={updatedFirstName}
        onChange={(e) => setUpdatedFirstName(e.target.value)}
        type='text'
        placeholder='First name'
      />
      <input
        className='focus:outline-none text-rose-950 bg-rose-100 dark:text-rose-100 dark:bg-pink-900 p-2 rounded-md'
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
