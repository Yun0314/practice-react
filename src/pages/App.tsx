import React from 'react';
import TodoList from '@todoList/TodoList';
import SlideShow from '@slideShow/SlideShow';
import style from '@/styles/app.module.scss';

function App() {
  return (
    <div className={style.appDiv}>
      <header className={style.appHeader}>
        <h2>React Practice</h2>
        <TodoList />
        <SlideShow />
      </header>
    </div>
  );
}

export default App;
