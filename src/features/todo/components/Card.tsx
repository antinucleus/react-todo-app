import React, { useState } from 'react';
import {
  Box,
  Badge,
  Button,
  IconButton,
  Spinner,
  Icon,
} from '@chakra-ui/react';
import { DeleteIcon, EditIcon, CheckIcon, CloseIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

import { ConfirmationBox } from '../components';
import { ITodo } from '../types';
import { useDeleteTodo, useUpdateTodo } from '../api';

export const Card = (values: ITodo) => {
  const navigate = useNavigate();
  const { id, content, isCompleted } = values;

  const [isOpen, setIsOpen] = useState(false);

  const deleteTodoMutation = useDeleteTodo();
  const updateTodoStatusMutation = useUpdateTodo();

  const handleUpdateTodo = () => navigate(`update/${id}`);

  const handleOpenDialog = () => setIsOpen(true);

  const handleCloseDialog = () => setIsOpen(false);

  const handleDeleteTodo = async () => {
    setIsOpen(false);
    await deleteTodoMutation.mutateAsync({ id });
  };

  const handleDone = async () => {
    await updateTodoStatusMutation.mutateAsync({
      ...values,
      isCompleted: true,
    });
  };

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <ConfirmationBox
        handleApprove={handleDeleteTodo}
        handleReject={handleCloseDialog}
        isOpen={isOpen}
        onClose={handleCloseDialog}
      />
      <Box p="6">
        <Badge
          borderRadius="3xl"
          px="2"
          colorScheme={isCompleted ? 'blue' : 'primary'}
        >
          Durum
          {isCompleted ? (
            <Icon ml={3}>
              <CheckIcon />
            </Icon>
          ) : (
            <Icon ml={3}>
              <CloseIcon />
            </Icon>
          )}
        </Badge>
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {content}
        </Box>

        <Box display="flex" mt="2" alignItems="center">
          {deleteTodoMutation.isLoading ? (
            <Spinner />
          ) : (
            <Box as="span" color="gray.600" fontSize="sm">
              {!isCompleted && (
                <Button
                  size="xs"
                  isLoading={updateTodoStatusMutation.isLoading}
                  onClick={handleDone}
                >
                  Tamamla
                </Button>
              )}
              <IconButton
                variant="ghost"
                aria-label="delete"
                icon={<DeleteIcon />}
                onClick={handleOpenDialog}
              />
              <IconButton
                variant="ghost"
                aria-label="edit"
                icon={<EditIcon />}
                onClick={handleUpdateTodo}
              />
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};
