import { TodoType, TodoActionType } from '@/types/todoList';

function setTodo(item: TodoType[]) {
  return {
    type: 'SET_TODO',
    payload: item,
  };
}

function addTodo(item: TodoType) {
  return {
    type: 'ADD_TODO',
    payload: item,
  };
}

function updateTodo(item: TodoType) {
  return {
    type: 'UPDATE_TODO',
    payload: item,
  };
}

function deleteTodo(id: number) {
  return {
    type: 'DELETE_TODO',
    payload: id,
  };
}

// export const todoDispatch = (dispatch: React.Dispatch<TodoActionType>) => ({
//     setTodo: (item: TodoType[]) => dispatch(setTodo(item)),
//     addTodo: (item: TodoType) => dispatch(addTodo(item)),
//     updateTodo: (item: TodoType) => dispatch(updateTodo(item)),
//     deleteTodo: (id: number) => dispatch(deleteTodo(id)),
//   });
