import React from 'react';

import { RouteObject } from 'react-router-dom';

import { NotFound, Landing } from '@/components';

export const defaultRoutes: RouteObject[] = [
  { path: '/', element: <Landing /> },
  { path: '*', element: <NotFound /> },
];
