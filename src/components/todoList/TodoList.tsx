import React, { useEffect, useCallback } from 'react';
import TodoServiceConfig from '@/apis/todoService';
import { setTodo, addTodo, updateTodo, deleteTodo, changeTodoTab } from '@/actions/todoAction';
import useTodoReducer from '@/reducers/todo';
import TodoTab from '@todoList/TodoTab';
import TodoForm from '@todoList/TodoForm';
import TodoItem from '@todoList/TodoItem';
import { TodoType } from '@/types/todoList';
import { UseAxiosType } from '@/types/index';
import style from '@/styles/todo-list.module.scss';

const TodoList: React.FC<UseAxiosType> = (props) => {
  const { isLoading, sendRequest } = props;
  const [state, dispatch] = useTodoReducer();

  // 第一次頁面載入呼叫 api 撈 list
  useEffect(() => {
    sendRequest(TodoServiceConfig.getAll(), (res: TodoType[]) => {
      dispatch(setTodo(res));
    });
  }, [sendRequest, dispatch]);

  // 使用 useCallback 避免重新渲染時 function 跟著重創一個實體而連帶子層跟著 reRender
  // 切換 item 狀態
  const atCheckItem = useCallback(
    (item: TodoType) => {
      const newItem = { ...item, checked: !item.checked };

      sendRequest(TodoServiceConfig.update(newItem), (res: TodoType) => {
        dispatch(updateTodo(res));
      });
    },
    [sendRequest, dispatch]
  );

  // 新增 item
  const atAddItem = useCallback(
    (content: string) => {
      const newItem = { content, checked: false };

      sendRequest(TodoServiceConfig.create(newItem), (res: TodoType) => {
        dispatch(addTodo(res));
        dispatch(changeTodoTab('all'));
      });
    },
    [sendRequest, dispatch]
  );

  // 移除 item
  const atDeleteItem = useCallback(
    (id: number) => {
      sendRequest(TodoServiceConfig.delete(id), () => {
        dispatch(deleteTodo(id));
      });
    },
    [sendRequest, dispatch]
  );

  const atChangeTab = useCallback(
    (tab: string) => {
      dispatch(changeTodoTab(tab));
    },
    [dispatch]
  );

  // 根據 tab 篩選 list
  const tabTodoList: TodoType[] = state.data.filter((item) => {
    if (state.tab === 'active') return !item.checked;
    if (state.tab === 'completed') return item.checked;
    return true;
  });

  const TodoBlock = () => {
    const noDataText = isLoading ? 'LOADING' : 'NO DATA';

    return tabTodoList?.length ? (
      <>
        {tabTodoList.map((item) => (
          <TodoItem key={item.id} {...item} onCheckItem={atCheckItem} onDeleteItem={atDeleteItem} />
        ))}
      </>
    ) : (
      <li className={style.todoNoData}>{noDataText}</li>
    );
  };

  return (
    <section>
      <TodoTab tabType={state.tab} onChangeTab={atChangeTab} />
      <TodoForm onAddItem={atAddItem} />
      <ul className={style.todoUl}>
        <TodoBlock />
      </ul>
    </section>
  );
};
export default TodoList;
