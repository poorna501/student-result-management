import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Login } from '../pages/auth/Login';
const router = createBrowserRouter(createRoutesFromElements(_jsx(_Fragment, { children: _jsxs(Route, { children: [_jsx(Route, { path: "/", element: _jsx(Login, {}) }), _jsx(Route, { path: "/login", element: _jsx(Login, {}) })] }) })));
const AppRoutes = () => _jsx(RouterProvider, { router: router });
export { router, AppRoutes };
