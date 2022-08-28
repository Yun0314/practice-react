import axios from '@/apis/axios';
import { useState, useCallback } from 'react';
import { RequestConfigType, applyDataType } from '@/types/index';

const useAxios = () => {
  const [isLoading, setIsLoading] = useState(true);

  const sendRequest = useCallback(
    async (requestConfig: RequestConfigType, applyData: applyDataType) => {
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
    },
    []
  );

  return {
    isLoading,
    sendRequest
  };
};

export default useAxios;
