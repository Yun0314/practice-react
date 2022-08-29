import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import axios from '@/apis/axios';
import { toggleLoading } from '@/actions/commonAction';
import { RequestConfigType, applyDataType } from '@/types/common';

const useAxios = () => {
  const dispatch = useDispatch();

  const sendRequest = useCallback(
    async (requestConfig: RequestConfigType, applyData: applyDataType) => {
      const { url, method = 'GET', data = null } = requestConfig;

      if (method === 'GET') dispatch(toggleLoading(true));

      let res;
      try {
        res = await axios({ url, method, data });
      } catch (err) {
        console.log((err as Error).name);
        throw new Error((err as Error).name);
      } finally {
        if (res) applyData(res.data);
        setTimeout(() => dispatch(toggleLoading(false)), 500);
      }
    },
    [dispatch]
  );

  return {
    sendRequest
  };
};

export default useAxios;
