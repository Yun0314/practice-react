import React from 'react';
import TodoList from '../components/todoList/TodoList';
import { AppDiv, AppHeader } from '../styles/styleApp';

function App() {
  return (
    <AppDiv>
      <AppHeader>
        <h2>React Practice</h2>
        <TodoList />
      </AppHeader>
    </AppDiv>
  );
}

export default App;
