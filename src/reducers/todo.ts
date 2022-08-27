import React, { useReducer } from 'react';
import {
  SET_TODO,
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  CHANGE_TODO_TAB
} from '@/actions/todoAction';
import { TodoType, TodoStateType, TodoActionType } from '@/types/todoList';

const initialState = {
  data: [],
  tab: 'all'
};

const reducer = (state: TodoStateType, action: TodoActionType): TodoStateType => {
  const { type, payload } = action;
  switch (type) {
    case SET_TODO:
      return {
        ...state,
        data: payload
      };

    case ADD_TODO:
      return {
        ...state,
        data: state.data.concat(payload)
      };

    case UPDATE_TODO:
      const newList: TodoType[] = state.data.map((item) => {
        if (item.id === payload.id) return payload;
        return item;
      });

      return {
        ...state,
        data: newList
      };

    case DELETE_TODO:
      return {
        ...state,
        data: state.data.filter((item) => item.id !== payload)
      };

    case CHANGE_TODO_TAB:
      return {
        ...state,
        tab: payload
      };

    default:
      return state;
  }
};

export default function useTodoReducer(): [TodoStateType, React.Dispatch<TodoActionType>] {
  const [state, dispatch] = useReducer(reducer, initialState);
  return [state, dispatch];
}
