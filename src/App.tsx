import Home from './pages/Home';
import Headphones from './pages/Headphones';
import Speakers from './pages/Speakers';
import Earphones from './pages/Earphones';
import Checkout from './pages/Checkout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import ErrorPage from './pages/ErrorPage';
import Product from './pages/Product';
import PathConstants from './routes/pathConstants';

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: PathConstants.HOME,
          element: <Home />,
        },
        {
          path: PathConstants.HEADPHONES,
          element: <Headphones />,
        },
        {
          path: PathConstants.SPEAKERS,
          element: <Speakers />,
        },

        {
          path: PathConstants.EARPHONES,
          element: <Earphones />,
        },
        {
          path: PathConstants.CHECKOUT,
          element: <Checkout />,
        },
        {
          path: PathConstants.PRODUCT,
          element: <Product />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
