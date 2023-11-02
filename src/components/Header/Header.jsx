import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

export const Header = () => {
  return (
    <nav className={css.nav}>
      <ul className={css.list}>
        <li className={css.item}>
          <NavLink to="/" className={css.link}>
            Log in
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink to="/home" className={css.link}>
            Home
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
