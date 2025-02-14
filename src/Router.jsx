import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from './componentes/Home';
import { ErrorPage } from './componentes/ErrorPage';

export const Router = createBrowserRouter([
    {
        element: <Layout />,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    }
]);