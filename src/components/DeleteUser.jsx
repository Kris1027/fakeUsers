import { useEffect } from 'react';
import { useData } from '../contexts/dataContext';

export default function DeleteUser({ id }) {
  const { data, setData } = useData();

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const update = data.filter((user) => user.id !== id);
        setData(update);
        console.log('Success:', response);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [data, setData, id]);
}
