import React, { useReducer } from 'react';
import {
  SET_PICTURE,
  ADD_PICTURE,
  DELETE_PICTURE,
  PLUS_CURRENT_INDEX,
  MINUS_CURRENT_INDEX
} from '@/actions/slideAction';
import { SlideShowType, SlideStateType, SlideActionType } from '@/types/slideShow';

const initialState = {
  perPage: 3, // 固定值
  imageWidth: 400, // 固定值
  data: [],
  length: 0,
  currentIndex: 0
};

let newList: SlideShowType[];
const reducer = (state: SlideStateType, action: SlideActionType): SlideStateType => {
  switch (action.type) {
    case SET_PICTURE:
      return {
        ...state,
        data: action.payload,
        length: action.payload.length
      };
    case ADD_PICTURE:
      newList = state.data.concat(action.payload);
      return {
        ...state,
        data: newList,
        length: newList.length,
        currentIndex: newList.length - state.perPage
      };
    case DELETE_PICTURE:
      newList = state.data.filter((item) => item.id !== action.payload);
      return {
        ...state,
        data: newList,
        length: newList.length,
        currentIndex: state.currentIndex === 0 ? 0 : state.currentIndex--
      };
    case PLUS_CURRENT_INDEX:
      return {
        ...state,
        currentIndex: state.currentIndex++
      };

    case MINUS_CURRENT_INDEX:
      return {
        ...state,
        currentIndex: state.currentIndex--
      };
    default:
      return state;
  }
};

export default function useSlideReducer(): [SlideStateType, React.Dispatch<SlideActionType>] {
  const [state, dispatch] = useReducer(reducer, initialState);
  return [state, dispatch];
}