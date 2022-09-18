import { Box, Spinner } from '@chakra-ui/react';

export const Loading = () => (
  <Box
    w="full"
    h="100vh"
    alignItems="center"
    display="flex"
    justifyContent="center"
  >
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="primary.500"
      size="xl"
    />
  </Box>
);
