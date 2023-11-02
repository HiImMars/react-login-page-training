import { Route, Routes } from 'react-router-dom';
import { Home } from './Home/Home';
import { Login } from './pages/Login';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Login />} />
        <Route path="home" element={<Home />} />
      </Route>
    </Routes>
  );
};
