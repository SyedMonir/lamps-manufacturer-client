import { useEffect, useState } from 'react';
import { fetcher } from '../api';

const useToken = (user) => {
  const [token, setToken] = useState('');
  useEffect(() => {
    const email = user?.user?.email;
    const userData = {
      email: user?.user?.email,
      userName: user?.user?.displayName,
      avatar: user?.user?.photoURL,
    };
    if (email) {
      fetcher.put(`/user/${email}`, userData).then((res) => {
        const accessToken = res.data.token;
        localStorage.setItem('accessToken', accessToken);
        setToken(accessToken);
      });
    }
  }, [user]);
  return [token];
};

export default useToken;
