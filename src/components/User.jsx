export default function User({ first_name, last_name }) {
  return (
    <div className='bg-rose-200 text-rose-950 dark:bg-rose-950 dark:text-rose-200 hover:bg-emerald-200 hover:text-emerald-950 dark:hover:bg-emerald-950 dark:hover:text-emerald-200 font-bold p-2 m-2 flex gap-1 cursor-pointer'>
      <span>{first_name}</span>
      <span>{last_name}</span>
    </div>
  );
}
