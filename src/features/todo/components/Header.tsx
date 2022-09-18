import { Box, Text, IconButton, Heading, useColorMode } from '@chakra-ui/react';
import { SunIcon } from './Icons/SunIcon';
import { MoonIcon } from './Icons/MoonIcon';

import { useUserStore } from '@/stores';

export const Header = () => {
  const { username } = useUserStore();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      zIndex={2}
      justifyContent="space-between"
      alignItems="center"
      display="flex"
      bg="primary.300"
      w="full"
      h="16"
      pos="fixed"
      p={3}
    >
      <Heading size="md">Yapılacaklar Listesi</Heading>
      <Box display="flex" alignItems="center">
        <Text size="lg">{username}</Text>
        <IconButton
          variant="ghost"
          _hover={{ bg: 'primary.200' }}
          _active={{ bg: false }}
          onClick={toggleColorMode}
          aria-label="button"
          size="lg"
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        />
      </Box>
    </Box>
  );
};
