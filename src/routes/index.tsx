import { useLayoutEffect } from 'react';
import { useRoutes } from 'react-router-dom';

import { defaultRoutes } from './default';
import { protectedRoutes } from './protected';
import { publicRoutes } from './public';
import { useUserStore } from '@/stores';
import { getData } from '@/utils';

export const Routes = () => {
  const { username, setUsername } = useUserStore();

  useLayoutEffect(() => {
    const name = getData();
    if (name) setUsername(name);
  }, []);

  const routes = username ? protectedRoutes : publicRoutes;

  const elements = useRoutes([...routes, ...defaultRoutes]);

  return <> {elements} </>;
};
