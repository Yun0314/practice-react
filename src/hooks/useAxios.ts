import axios from '@/apis/axios';
import { useState, useCallback } from 'react';
import { RequestConfigType } from '@/types/index';

const useAxios = () => {
  const [isLoading, setIsLoading] = useState(true);

  // any 待調整
  const sendRequest = useCallback(async (requestConfig: RequestConfigType, applyData: any) => {
    const { url, method = 'GET', data = null } = requestConfig;

    method === 'GET' && setIsLoading(true);

    let res;
    try {
      res = await axios({ url, method, data });
    } catch (err) {
      console.log((err as Error).name);
    } finally {
      if (res) applyData(res.data);
      setTimeout(() => setIsLoading(false), 500);
    }
  }, []);

  return {
    isLoading,
    sendRequest
  };
};

export default useAxios;
