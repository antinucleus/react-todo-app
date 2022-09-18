import { useMutation } from '@tanstack/react-query';

import { queryClient } from '@/lib/react-query';
import { axios } from '@/lib/axios';
import { ITodo } from '../types';
import { useToast } from '@/utils';

const updateTodo = async ({ id, content, isCompleted }: ITodo) => {
  const result = await axios.put(`todos/${id}`, { content, isCompleted });
  return result.data;
};

export const useUpdateTodo = () => {
  const { showToast } = useToast();

  return useMutation({
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries(['allTodos']);
      queryClient.invalidateQueries(['todo', id]);
      showToast({ message: 'Todo güncellendi', status: 'success' });
    },
    onError: () => {
      showToast({ message: 'Todo güncelleme hatası', status: 'error' });
    },
    mutationFn: updateTodo,
  });
};
