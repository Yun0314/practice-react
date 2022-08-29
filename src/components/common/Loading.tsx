import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/types/common';

const Loading = () => {
  const loading = useSelector((state: RootState) => state.common.loading);

  return <div className="loading" data-active={loading} />;
};

export default memo(Loading);
