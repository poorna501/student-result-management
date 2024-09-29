import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Login } from '../pages/auth/Login';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Login />} />
      </Route>
    </>
  )
);
const AppRoutes = () => <RouterProvider router={router} />;

export {
  router,
  AppRoutes
};
