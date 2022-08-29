export const TOGGLE_LOADING = 'TOGGLE_LOADING';
import { CommonActionType } from '@/types/common';

export function toggleLoading(status: boolean): CommonActionType {
  return {
    type: TOGGLE_LOADING,
    payload: status
  };
}
