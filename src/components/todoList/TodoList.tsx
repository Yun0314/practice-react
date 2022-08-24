import React, { useState, useEffect, useCallback } from 'react';
import TodoDataService from '@/apis/todoService';
import TodoTab from '@todoList/TodoTab';
import TodoForm from '@todoList/TodoForm';
import TodoItem from '@todoList/TodoItem';
import { TodoType } from '@/types/todoList';
import style from '@/styles/todo-list.module.scss';

const TodoList: React.FC = () => {
  const [list, setList] = useState<TodoType[]>([]);
  const [tabType, setTabType] = useState<string>('all');

  // 第一次頁面載入呼叫api撈 list
  useEffect(() => {
    TodoDataService.getAll()
      .then((res) => {
        setList(res.data);
      })
      .catch((err: Error) => {
        console.log(err);
      });
  }, []);

  // 使用 useCallback 避免重新渲染時 function 跟著重創一個實體而連帶子層跟著 reRender
  // 切換 item 狀態
  const atCheckItem = useCallback((item: TodoType) => {
    const newItem = { ...item, checked: !item.checked };
    TodoDataService.update(newItem)
      .then((res) => {
        setList((prev) => {
          const newList: TodoType[] = prev.map((prevItem) => {
            if (prevItem.id === item.id) return res.data;
            return prevItem;
          });
          return newList;
        });
      })
      .catch((err: Error) => {
        console.log(err);
      });
  }, []);

  // 新增 item
  const atAddItem = useCallback((content: string) => {
    // api 打過去後會自動幫加上 id
    const newItem = {
      content,
      checked: false,
    };

    TodoDataService.create(newItem)
      .then((res) => {
        setList((prev) => prev.concat(res.data));
        //切換至全部 tab
        setTabType('all');
      })
      .catch((err: Error) => {
        console.log(err);
      });
  }, []);

  // 移除 item
  const atDeleteItem = useCallback((id: number) => {
    TodoDataService.delete(id)
      .then(() => {
        setList((prev) => prev.filter((item) => item.id !== id));
      })
      .catch((err: Error) => {
        console.log(err);
      });
  }, []);

  // 根據 tab 篩選 list
  const tabTodoList: TodoType[] = list.filter((item) => {
    if (tabType === 'active') return !item.checked;
    if (tabType === 'completed') return item.checked;
    return true;
  });

  const noData: boolean = tabTodoList?.length ? true : false;

  return (
    <>
      <TodoTab tabType={tabType} onChangeTab={setTabType} />
      <TodoForm onAddItem={atAddItem} />
      <ul className={style.todoUl}>
        {noData ? (
          tabTodoList.map((item) => (
            <TodoItem
              key={item.id}
              id={item.id}
              content={item.content}
              checked={item.checked}
              onCheckItem={atCheckItem}
              onDeleteItem={atDeleteItem}
            />
          ))
        ) : (
          <div>無資料</div>
        )}
      </ul>
    </>
  );
};
export default TodoList;
