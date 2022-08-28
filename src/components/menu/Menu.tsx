import React from 'react';
import { NavLink } from 'react-router-dom';
import style from '@/styles/menu.module.scss';

const Menu = () => {
  return (
    <section>
      <nav className={style.navList}>
        <NavLink className={style.navItem} to="/">
          Home
        </NavLink>
        <NavLink className={style.navItem} to="/todoList">
          TodoList
        </NavLink>
        <NavLink className={style.navItem} to="/slideShow">
          SlideShow
        </NavLink>
      </nav>
      <hr className={style.menuHr} />
    </section>
  );
};
export default React.memo(Menu, () => true);
