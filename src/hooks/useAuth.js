import { useState } from 'react';
import api from '../utils/api';

const useAuth = () => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const authenticate = async (isSignIn, username, email, password) => {
    setError('');
    setIsLoading(true);
    const url = isSignIn ? '/login/' : '/signup/';
    const payload = isSignIn ? { username, password } : { username, email, password };

    try {
      const response = await api.post(url, payload);
      if (response.data.access) {
        /* localStorage.setItem('authToken', response.data.access); */
      }
      return response.data;
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred');
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { authenticate, error, isLoading };
};

export default useAuth;
