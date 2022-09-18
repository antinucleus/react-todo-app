import React from 'react';
import { RouteObject } from 'react-router-dom';

import { Layout, Todo, CreateTodo, UpdateTodo } from '@/features/todo';

export const protectedRoutes: RouteObject[] = [
  {
    path: '/app',
    element: <Layout />,
    children: [
      { path: '', element: <Todo /> },
      { path: 'update/:id', element: <UpdateTodo /> },
      { path: 'create', element: <CreateTodo /> },
    ],
  },
];
