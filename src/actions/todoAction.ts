import { TodoType, TodoActionType } from '@/types/todoList';

export const SET_TODO = 'SET_TODO';
export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const CHANGE_TODO_TAB = 'CHANGE_TODO_TAB';

export function setTodo(list: TodoType[]): TodoActionType {
  return {
    type: SET_TODO,
    payload: list
  };
}

export function addTodo(item: TodoType): TodoActionType {
  return {
    type: ADD_TODO,
    payload: item
  };
}

export function updateTodo(item: TodoType): TodoActionType {
  return {
    type: UPDATE_TODO,
    payload: item
  };
}

export function deleteTodo(id: number): TodoActionType {
  return {
    type: DELETE_TODO,
    payload: id
  };
}

export function changeTodoTab(type: string): TodoActionType {
  return {
    type: CHANGE_TODO_TAB,
    payload: type
  };
}

// export const todoDispatch = (dispatch: React.Dispatch<TodoActionType>) => ({
//     setTodo: (item: TodoType[]) => dispatch(setTodo(item)),
//     addTodo: (item: TodoType) => dispatch(addTodo(item)),
//     updateTodo: (item: TodoType) => dispatch(updateTodo(item)),
//     deleteTodo: (id: number) => dispatch(deleteTodo(id)),
//     changeTodoTab: (type: string) => dispatch(changeTodoTab(type)),
//   });
