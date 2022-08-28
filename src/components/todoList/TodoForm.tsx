import React, { useState, memo, FormEvent } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import SendIcon from '@mui/icons-material/Send';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { TodoFormProps } from '@/types/todoList';
import { TodoTextField, TodoButton } from '@/styles/mui/muiTodoList';
import style from '@/styles/todo-list.module.scss';

const TodoForm: React.FC<TodoFormProps> = (props) => {
  const { onAddItem } = props;
  const [content, setContent] = useState<string>('');

  const atSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 沒輸入的話不進行任何動作
    if (content === '') return;

    // 呼叫父層 function 進行儲存
    onAddItem(content);

    // 重置 input 內容
    setContent('');
  };

  return (
    <>
      <form className={style.todoForm} onSubmit={(e) => atSubmit(e)}>
        <TodoTextField
          id="todo-input"
          placeholder="TODO"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ListAltIcon />
              </InputAdornment>
            )
          }}
          variant="outlined"
          required
        />
        <TodoButton variant="contained" color="primary" type="submit" endIcon={<SendIcon />}>
          SEND
        </TodoButton>
      </form>
    </>
  );
};
export default memo(TodoForm);
