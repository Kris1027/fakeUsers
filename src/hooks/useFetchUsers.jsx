import { useEffect, useState } from 'react';
import { useData } from '../contexts/dataContext';

export const API_URL = 'https://reqres.in/api/users/';

export default function useFetchUsers() {
  const { setData } = useData();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    function fakeUsers() {
      fetch(API_URL)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json();
        })
        .then((res) => {
          setData(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setIsLoading(false);
        });
    }

    fakeUsers();
  }, [setData]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
}
