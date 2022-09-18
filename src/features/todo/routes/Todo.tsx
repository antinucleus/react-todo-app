import { Box, IconButton, Grid, GridItem } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

import { Loading } from '@/components';
import { useAllTodos } from '../api';
import { Card } from '../components';

export const Todo = () => {
  const navigate = useNavigate();

  const allTodosQuery = useAllTodos();

  if (allTodosQuery.isLoading) return <Loading />;

  const handleCreateTodo = () => navigate('create');

  return (
    <Box>
      <Box justifyContent="flex-end" display="flex">
        <IconButton
          aria-label="create"
          icon={<AddIcon />}
          zIndex={1}
          pos="fixed"
          rounded="full"
          onClick={handleCreateTodo}
        />
      </Box>
      <Grid w="100%" templateColumns="repeat(4,1fr)" gap={4}>
        {allTodosQuery.data?.map((todo, id) => (
          <GridItem colSpan={[2, 1, 1, 1]} width="100%" key={`todo-${id}`}>
            <Card {...todo} />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};
