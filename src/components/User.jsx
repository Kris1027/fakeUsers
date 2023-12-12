import { MdOutlineDelete } from 'react-icons/md';

export default function User({ first_name, last_name, onDelete }) {
  return (
    <div className='bg-rose-200 text-rose-950 dark:bg-rose-950 dark:text-rose-200 hover:bg-emerald-200 hover:text-emerald-950 dark:hover:bg-emerald-950 dark:hover:text-emerald-200 font-bold p-2 m-2 flex gap-1 cursor-pointer w-3/4'>
      <span>{first_name}</span>
      <span>{last_name}</span>
      <button className='ml-auto' onClick={onDelete}>
        <MdOutlineDelete />
      </button>
    </div>
  );
}
