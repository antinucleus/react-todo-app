import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

import { Header } from './Header';

export const Layout = () => {
  return (
    <Box display="flex" w="100%">
      <Header />
      <Box w="100%" mt="16" p={3}>
        <Outlet />
      </Box>
    </Box>
  );
};
