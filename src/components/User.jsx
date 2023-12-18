import { MdOutlineDelete, MdOutlineEdit } from 'react-icons/md';
import Button from '../ui/Button';
import EditUser from './EditUser';
import { useState } from 'react';
import useDeleteUser from '../hooks/useDeleteUser';

export default function User({ first_name, last_name, id, image }) {
  const [showEdit, setShowEdit] = useState(false);

  const toggleInputFields = () => {
    setShowEdit(!showEdit);
  };

  const deleteUser = useDeleteUser();

  return (
    <div className='bg-rose-200 text-rose-950 dark:bg-rose-950 dark:text-rose-200 hover:bg-emerald-200 hover:text-emerald-950 dark:hover:bg-emerald-950 dark:hover:text-emerald-200 font-bold m-2 p-1 flex gap-1 cursor-pointer w-3/4 rounded-md items-center'>
      {showEdit ? (
        <EditUser
          first_name={first_name}
          last_name={last_name}
          id={id}
          setShowEdit={setShowEdit}
          showEdit={showEdit}
        />
      ) : (
        <>
          <img
            className='w-24 h-24 rounded-full opacity-90 hover:opacity-100'
            src={image}
            alt={`avatar of the ${first_name} ${last_name}`}
          />
          <span>{first_name}</span>
          <span>{last_name}</span>
        </>
      )}
      <div className='ml-auto'>
        <Button onClick={toggleInputFields}>
          <MdOutlineEdit />
        </Button>
        <Button onClick={() => deleteUser(id)}>
          <MdOutlineDelete />
        </Button>
      </div>
    </div>
  );
}
