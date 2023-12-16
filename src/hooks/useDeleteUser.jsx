import { useData } from '../contexts/dataContext';
import { API_URL } from './useFetchUsers';

export default function useDeleteUser() {
  const { data, setData } = useData();

  return (id) => {
    fetch(API_URL + id, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        console.log('Success:', response);
        const update = data.filter((user) => user.id !== id);
        setData(update);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
}
