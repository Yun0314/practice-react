export type RequestConfigType = {
  url: string;
  method: string;
  data?: unknown;
};

// any 待調整
export type applyDataType = (data: any) => void;

export type UseAxiosType = {
  isLoading: boolean;
  sendRequest: (requestConfig: RequestConfigType, applyData: applyDataType) => Promise<void>;
};
