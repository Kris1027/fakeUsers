import { useData } from '../contexts/dataContext';
import { API_URL } from './useFetchUsers';

export default function useAddUser() {
  const { data, setData } = useData();

  return (newUser) => {
    fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((newUser) => {
        setData([...data, newUser]);
        console.log('Success:', newUser);
      })
      .catch((error) => console.error('Error:', error));
  };
}
