import { useData } from '../contexts/dataContext';
import { API_URL } from './useFetchUsers';

export default function useUpdateUser() {
  const { data, setData } = useData();

  return (id, updatedUserData) =>
    fetch(API_URL + id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUserData),
    })
      .then((response) => response.json())
      .then((updatedUser) => {
        const updatedData = data.map((user) =>
          user.id === id ? updatedUser : user
        );
        setData(updatedData);
        console.log('Success:', updatedUser);
      });
}
