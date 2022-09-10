import React from 'react';
import { RouteObject } from 'react-router-dom';

import { Layout, Todo } from '@/features/todo';

export const protectedRoutes: RouteObject[] = [
  {
    path: '/app',
    element: <Layout />,
    children: [{ path: '', element: <Todo /> }],
  },
];
