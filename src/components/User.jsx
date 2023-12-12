import { useState } from 'react';
import { MdOutlineDelete, MdOutlineEdit } from 'react-icons/md';
import UpdateUser from './UpdateUser';

export default function User({ first_name, last_name, onDelete, onUpdate }) {
  const [showEdit, setShowEdit] = useState(false);

  return (
    <div className='bg-rose-200 text-rose-950 dark:bg-rose-950 dark:text-rose-200 hover:bg-emerald-200 hover:text-emerald-950 dark:hover:bg-emerald-950 dark:hover:text-emerald-200 font-bold p-2 m-2 flex gap-1 cursor-pointer w-3/4 rounded-md'>
      <span>{first_name}</span>
      <span>{last_name}</span>
      {showEdit && (
        <UpdateUser
          first_name={first_name}
          last_name={last_name}
          setShowEdit={setShowEdit}
          onUpdate={onUpdate}
        />
      )}
      <div className='ml-auto'>
        <button onClick={() => setShowEdit(!showEdit)}>
          <MdOutlineEdit />
        </button>
        <button onClick={onDelete}>
          <MdOutlineDelete />
        </button>
      </div>
    </div>
  );
}
