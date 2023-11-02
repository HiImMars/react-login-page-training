import { useDispatch, useSelector } from 'react-redux';
import { setName, setEmail, setPassword } from 'redux/loginForm/loginFormSlice';
import { Link } from 'react-router-dom';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const { name, email, password } = useSelector(state => state.login);
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    if (target.name === 'name') {
      dispatch(setName(target.value));
    }
    if (target.name === 'email') {
      dispatch(setEmail(target.value));
    }
    if (target.name === 'password') {
      dispatch(setPassword(target.value));
    }
  };

  const SubmitButton = () => {
    if (name && email && password) {
      return (
        <button type="submit" className={css.btn}>
          Log in
        </button>
      );
    } else {
      return (
        <button type="submit" className={css.btn} disabled>
          Log in
        </button>
      );
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className={css.wrapper}>
      <img
        src="https://img.freepik.com/free-vector/access-control-system-abstract-concept-illustration-security-system-authorize-entry-login-credentials-electronic-access-password-pass-phrase-pin-verification_335657-3373.jpg?size=626&ext=jpg&ga=GA1.1.2026900989.1698954966&semt=sph"
        alt="login"
        width="300"
        className={css.img}
      />
      <div className={css.formWrapper}>
        <h1 className={css.title}>Log in your account</h1>
        <form className={css.form} onSubmit={handleSubmit}>
          <label className={css.label}>
            Name
            <input
              className={css.input}
              type="text"
              name="name"
              onChange={handleChange}
              required
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            />
          </label>
          <label className={css.label}>
            Email
            <input
              className={css.input}
              type="email"
              name="email"
              onChange={handleChange}
              required
              pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
            />
          </label>
          <label className={css.label}>
            Password
            <input
              className={css.input}
              type="password"
              name="password"
              onChange={handleChange}
              required
              pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
            />
          </label>
          <Link to="/home" className={css.link}>
            <SubmitButton />
          </Link>
        </form>
      </div>
    </div>
  );
};
