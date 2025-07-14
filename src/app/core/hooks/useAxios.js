import { useState, useCallback } from 'react';

import axios from 'axios';

export const useAxios = (path, payload) => {
  const baseUri = 'http://localhost:9000/api';
  // const baseUri =
  //   'https://ef37-2001-1308-27b9-e600-71a7-6d94-6c10-9d7c.ngrok-free.app/api';
  const uri = baseUri + '/' + path;

  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const handleError = (error) => {
    setError(error);
    setLoading(false);
  };

  const get = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(uri);
      setResponse(response);
      setLoading(false);
    } catch (error) {
      handleError(error?.response?.data || error);
    }
  }, [uri]);

  const post = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.post(uri, payload);
      console.log({ response });
      setResponse(response?.data);
      setLoading(false);
      return response?.data;
    } catch (error) {
      handleError(error?.response?.data || error);
      return error?.response?.data;
    }
  }, [uri, payload]);

  const put = useCallback(async () => {
    setLoading(response);
    try {
      const response = await axios.put(uri, payload);
      setResponse(response);
      setLoading(false);
    } catch (error) {
      handleError(error?.response?.data || error);
    }
  }, [uri, payload]);

  const remove = useCallback(async () => {
    setLoading();
    try {
      const response = await axios.delete(uri);
      setResponse(response);
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
