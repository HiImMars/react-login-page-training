import { useSelector } from 'react-redux';
import css from './Home.module.css';

export const Home = () => {
  const { name } = useSelector(state => state.login);

  return (
    <>
      <h1 className={css.greeting}>
        Welcome to your personal universe, {name}!
      </h1>
    </>
  );
};
