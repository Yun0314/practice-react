import React, { memo } from 'react';
import { LoadingType } from '@/types/index';
import '@/styles/index.scss';

const Loading: React.FC<LoadingType> = (props) => {
  const { isLoading } = props;

  return <div className="loading" data-active={isLoading}></div>;
};

export default memo(Loading);
