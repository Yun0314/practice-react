import React, { memo, MouseEvent } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { TodoItemProps } from '@/types/todoList';
import { TodoCheckbox } from '@/styles/styleTodoList';
import style from '@/styles/todo-list.module.scss';

const TodoItem: React.FC<TodoItemProps> = (props) => {
  const { id, content, checked, onCheckItem, onDeleteItem } = props;

  const atDeleteClick = (e: MouseEvent) => {
    // 防止觸發 li click
    e.stopPropagation();

    // 呼叫父層 function 進行刪除
    onDeleteItem(id);
  };

  return (
    <li
      className={style.todoLi}
      data-active={checked}
      onClick={() => onCheckItem({ id, content, checked })}
    >
      <div className="todoCheckedBlock">
        <TodoCheckbox checked={checked} onChange={() => ''} />
        {content}
      </div>
      <IconButton aria-label="delete" color="error" onClick={(e) => atDeleteClick(e)}>
        <DeleteIcon />
      </IconButton>
    </li>
  );
};
export default memo(TodoItem);
