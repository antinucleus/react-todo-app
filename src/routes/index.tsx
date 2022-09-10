import React from 'react';
import { useRoutes } from 'react-router-dom';

import { defaultRoutes } from './default';
import { protectedRoutes } from './protected';
import { publicRoutes } from './public';

export const Routes = () => {
  const auth = false;

  const routes = auth ? protectedRoutes : publicRoutes;

  const elements = useRoutes([...routes, ...defaultRoutes]);

  return <> {elements} </>;
};
