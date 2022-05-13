import { useEffect, useState } from 'react';

const useFetchUser = url => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(data => {
        setUserData(data);
        setLoading(false);
      })
      .catch(e => setError(e));
  }, [url]);

  return { userData, loading, error };
};

export default useFetchUser;
