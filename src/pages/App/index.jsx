import { BrowserRouter, useRoutes } from 'react-router-dom';
import Home from '../home';
import NotFound from '../NotFound';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import SignIn from '../SignIn';
import NavBar from '../../components/NavBar';
import ShopingCartProvider from '../../context';

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: 'my-account', element: <MyAccount /> },
    { path: 'my-order', element: <MyOrder /> },
    { path: 'my-orders', element: <MyOrders /> },
    { path: 'sign-in', element: <SignIn /> },
    { path: '/', element: <Home /> },
    { path: '/*', element: <NotFound /> },
  ]);
  return routes;
};

const App = () => {
  return (
    <ShopingCartProvider>
    <BrowserRouter>
      <NavBar />
      <hr/>
      <AppRoutes />
      </BrowserRouter>
    </ShopingCartProvider>
      
  );
};

export default App;
