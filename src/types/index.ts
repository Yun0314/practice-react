export type LoadingType = {
  isLoading: boolean;
};

// any 待調整
export interface RequestConfigType {
  url: string;
  method: string;
  data?: any;
}
