import React, { useEffect, useCallback } from 'react';
import TodoDataService from '@/apis/todoService';
import { setTodo, addTodo, updateTodo, deleteTodo, changeTodoTab } from '@/actions/todoAction';
import useTodoReducer from '@/reducers/todo';
import TodoTab from '@todoList/TodoTab';
import TodoForm from '@todoList/TodoForm';
import TodoItem from '@todoList/TodoItem';
import { TodoType } from '@/types/todoList';
import style from '@/styles/todo-list.module.scss';

const TodoList: React.FC = () => {
  const [state, dispatch] = useTodoReducer();

  // 第一次頁面載入呼叫api撈 list
  useEffect(() => {
    TodoDataService.getAll()
      .then((res) => {
        dispatch(setTodo(res.data));
      })
      .catch((err: Error) => {
        console.log(err);
      });
  }, [dispatch]);

  // 使用 useCallback 避免重新渲染時 function 跟著重創一個實體而連帶子層跟著 reRender
  // 切換 item 狀態
  const atCheckItem = useCallback(
    (item: TodoType) => {
      const newItem = { ...item, checked: !item.checked };
      TodoDataService.update(newItem)
        .then((res) => {
          dispatch(updateTodo(res.data));
        })
        .catch((err: Error) => {
          console.log(err);
        });
    },
    [dispatch],
  );

  // 新增 item
  const atAddItem = useCallback(
    (content: string) => {
      // api 打過去後會自動幫加上 id
      const newItem = {
        content,
        checked: false,
      };

      TodoDataService.create(newItem)
        .then((res) => {
          dispatch(addTodo(res.data));
          dispatch(changeTodoTab('all'));
        })
        .catch((err: Error) => {
          console.log(err);
        });
    },
    [dispatch],
  );

  // 移除 item
  const atDeleteItem = useCallback(
    (id: number) => {
      TodoDataService.delete(id)
        .then(() => {
          dispatch(deleteTodo(id));
        })
        .catch((err: Error) => {
          console.log(err);
        });
    },
    [dispatch],
  );

  const atChangeTab = useCallback(
    (tab: string) => {
      dispatch(changeTodoTab(tab));
    },
    [dispatch],
  );

  // 根據 tab 篩選 list
  const tabTodoList: TodoType[] = state.data.filter((item) => {
    if (state.tab === 'active') return !item.checked;
    if (state.tab === 'completed') return item.checked;
    return true;
  });

  const noData: boolean = tabTodoList?.length ? true : false;

  return (
    <>
      <TodoTab tabType={state.tab} onChangeTab={atChangeTab} />
      <TodoForm onAddItem={atAddItem} />
      <ul className={style.todoUl}>
        {noData ? (
          tabTodoList.map((item) => (
            <TodoItem
              key={item.id}
              {...item}
              onCheckItem={atCheckItem}
              onDeleteItem={atDeleteItem}
            />
          ))
        ) : (
          <div className={style.todoNoData}>無資料</div>
        )}
      </ul>
    </>
  );
};
export default TodoList;
