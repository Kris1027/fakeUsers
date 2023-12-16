export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className='text-2xl hover:scale-110 active:scale-90 text-rose-950 dark:text-rose-200'
    >
      {children}
    </button>
  );
}
