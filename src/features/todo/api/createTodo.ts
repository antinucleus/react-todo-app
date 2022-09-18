import { useMutation } from '@tanstack/react-query';

import { queryClient } from '@/lib/react-query';
import { axios } from '@/lib/axios';
import { ITodo } from '../types';
import { useToast } from '@/utils';

type Params = Omit<ITodo, 'id'>;

const createTodo = async (body: Params) => {
  const result = await axios.post('/todos', { ...body });
  return result.data;
};

export const useCreateTodo = () => {
  const { showToast } = useToast();

  return useMutation({
    onSuccess: () => {
      queryClient.invalidateQueries(['allTodos']);
      showToast({ message: 'Todo oluşturuldu', status: 'success' });
    },
    onError: () => {
      showToast({ message: 'Todo oluşturma hatası', status: 'error' });
    },
    mutationFn: createTodo,
  });
};
