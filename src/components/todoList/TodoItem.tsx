import React, { memo, MouseEvent } from 'react';
import classnames from 'classnames';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { TodoItemProps } from '../../types/todoList';
import { TodoCheckbox, TodoLi } from '../../styles/styleTodoList';

const TodoItem: React.FC<TodoItemProps> = (props) => {
  const { id, content, checked, onCheckItem, onDeleteItem } = props;

  const atDeleteClick = (e: MouseEvent) => {
    // 防止觸發 li click
    e.stopPropagation();

    // 呼叫父層 function 進行刪除
    onDeleteItem(id);
  };

  return (
    <TodoLi
      className={classnames({ done: checked })}
      onClick={() => onCheckItem({ id, content, checked })}
    >
      <div className="todo-checked-block">
        <TodoCheckbox checked={checked} onChange={() => ''} />
        {content}
      </div>
      <IconButton
        aria-label="delete"
        color="error"
        onClick={(e) => atDeleteClick(e)}
      >
        <DeleteIcon />
      </IconButton>
    </TodoLi>
  );
};
export default memo(TodoItem);
