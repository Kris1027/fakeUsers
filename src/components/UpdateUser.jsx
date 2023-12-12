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
    <form className='flex' onSubmit={handleEditUser}>
      <input
        className='focus:outline-none'
        value={updatedFirstName}
        onChange={(e) => setUpdatedFirstName(e.target.value)}
        type='text'
        placeholder='First name'
      />
      <input
        className='flex focus:outline-none'
        value={updatedLastName}
        onChange={(e) => setUpdatedLastName(e.target.value)}
        type='text'
        placeholder='Last name'
      />
      <button onClick={() => setShowEdit(false)}>
        <MdClose />
      </button>
      <button type='submit'>
        <MdOutlineCheckCircle />
      </button>
    </form>
  );
}
