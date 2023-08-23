import { BrowserRouter, useRoutes } from 'react-router-dom';
import Home from '../home';
import NotFound from '../NotFound';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import SignIn from '../SignIn';
import NavBar from '../../components/NavBar';
import { ShoppingCartProvider } from '../../context';
import CheckoutSideMenu from '../../components/CheckoutSideMenu';



const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: 'my-account', element: <MyAccount /> },
    { path: 'my-order', element: <MyOrder /> },
    { path: 'my-orders', element: <MyOrders /> },
    { path: 'my-orders/last', element: <MyOrder /> },
    { path: 'sign-in', element: <SignIn /> },
    { path: '/', element: <Home /> },
    { path: '/*', element: <NotFound /> },
  ]);
  return routes;
};

const App = () => {

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <NavBar />
        <CheckoutSideMenu/>
        <hr />
        <AppRoutes />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
};

export default App;
