export interface RequestConfigType {
  url: string;
  method: string;
  data?: unknown;
}

// any 待調整
export type applyDataType = (data: any) => void;
