import { TOGGLE_LOADING } from '@/actions/commonAction';
import { CommonStateType, CommonActionType } from '@/types/common';

const initialState = {
  loading: false
};

const reducer = (
  state: CommonStateType = initialState,
  action: CommonActionType
): CommonStateType => {
  switch (action.type) {
    case TOGGLE_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
