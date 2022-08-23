import React from 'react';
import TodoList from '../components/todoList/TodoList';
import style from '../styles/app.module.scss';

function App() {
  return (
    <div className={style.appDiv}>
      <header className={style.appHeader}>
        <h2>React Practice</h2>
        <TodoList />
      </header>
    </div>
  );
}

export default App;
