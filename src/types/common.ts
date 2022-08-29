import { SlideStateType } from '@/types/slideShow';

export type CommonStateType = {
  loading: boolean;
};

export type CommonActionType = { type: 'TOGGLE_LOADING'; payload: boolean };

export type RootState = {
  slide: SlideStateType;
  common: CommonStateType;
};

export type RequestConfigType = {
  url: string;
  method: string;
  data?: unknown;
};

// any 待調整
export type applyDataType = (data: any) => void;
