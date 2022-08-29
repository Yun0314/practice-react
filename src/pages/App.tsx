import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from '@/components/menu/Menu';
import Home from '@/components/home/Home';
import TodoList from '@/containers/TodoList';
import SlideShow from '@/containers/SlideShow';
import Loading from '@common/Loading';
import style from '@/styles/app.module.scss';

const App = () => {
  return (
    <Router>
      <Loading />
      <div className="app">
        <div className={style.appDiv}>
          <header className={style.appHeader}>
            <h2>React Practice</h2>
            <Menu />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/todoList" element={<TodoList />} />
              <Route path="/slideShow" element={<SlideShow />} />
            </Routes>
          </header>
        </div>
      </div>
    </Router>
  );
};

export default App;
