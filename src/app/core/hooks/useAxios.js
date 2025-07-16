import { useState, useCallback } from 'react';

import axios from 'axios';

export const useAxios = (path, payload) => {
  const mockUri = import.meta.env.VITE_API_URL;
  console.log({ mockUri });
  // const baseUri = 'http://localhost:9000' + '/api';
  const baseUri = 'https://prince-i9lj.onrender.com' + '/api';
  const uri = baseUri + '/' + path;

  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const handleError = (error) => {
    console.log(error);
    setError(error);
    setLoading(false);
  };

  const get = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(uri);
      setResponse(response?.data);
      setLoading(false);
    } catch (error) {
      handleError(error?.response?.data || error);
    }
  }, [uri]);

  const post = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.post(uri, payload);
      setResponse(response?.data);
      setLoading(false);
    } catch (error) {
      handleError(error?.response?.data || error);
    }
  }, [uri, payload]);

  const put = useCallback(async () => {
    setLoading(response);
    try {
      const response = await axios.put(uri, payload);
      setResponse(response?.data);
      setLoading(false);
    } catch (error) {
      handleError(error?.response?.data || error);
    }
  }, [uri, payload]);

  const remove = useCallback(async () => {
    setLoading();
    try {
      const response = await axios.delete(uri);
      setResponse(response?.data);
      setLoading(false);
    } catch (error) {
      handleError(error?.response?.data || error);
    }
  }, [uri]);

  return {
    response,
    error,
    loading,
    get,
    post,
    put,
    remove,
  };
};

export default useAxios;
