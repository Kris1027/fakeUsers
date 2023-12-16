import { useData } from '../contexts/dataContext';

export default function useDeleteUser() {
  const { data, setData } = useData();

  return function (id) {
    const update = data.filter((user) => user.id !== id);
    setData(update);
  };
}
