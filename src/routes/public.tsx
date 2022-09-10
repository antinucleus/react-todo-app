import { Login } from '@/features/auth';
import { RouteObject } from 'react-router-dom';

export const publicRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/app/*',
    element: <Login />,
  },
];
