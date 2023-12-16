export default function Input({ placeholder, type, onChange, value }) {
  return (
    <input
      className='bg-rose-100 text-rose-950 dark:bg-rose-900 dark:text-rose-200 px-2 rounded-md focus:outline-none'
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
}
