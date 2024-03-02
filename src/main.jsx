import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import App from './app';
// import . from './'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                // element: < />
            },
            {
                path: '/',
                // element: < />
            },
            {
                path: '/',
                // element: < />
            },
            {
                path: '/',
                // element: < />
            },
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);