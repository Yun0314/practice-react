import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from '@/components/menu/Menu';
import Home from '@/components/home/Home';
import TodoList from '@/containers/TodoList';
import SlideShow from '@/containers/SlideShow';
import Loading from '@common/Loading';
import style from '@/styles/app.module.scss';
import useAxios from '@/hooks/useAxios';

const App = () => {
  const { isLoading, sendRequest } = useAxios();

  return (
    <Router>
      {isLoading && <Loading />}
      <div className="app">
        <div className={style.appDiv}>
          <header className={style.appHeader}>
            <h2>React Practice</h2>
            <Menu />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/todoList"
                element={<TodoList isLoading={isLoading} sendRequest={sendRequest} />}
              />
              <Route
                path="/slideShow"
                element={<SlideShow isLoading={isLoading} sendRequest={sendRequest} />}
              />
            </Routes>
          </header>
        </div>
      </div>
    </Router>
  );
};

export default App;
