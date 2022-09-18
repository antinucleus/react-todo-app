import { useMutation } from '@tanstack/react-query';

import { queryClient } from '@/lib/react-query';
import { axios } from '@/lib/axios';
import { useToast } from '@/utils';

type Params = {
  id: string;
};

const deleteTodo = async ({ id }: Params) => {
  try {
    const result = await axios.delete(`/todos/${id}`);

    if (result.status === 200) return result.data;

    return undefined;
  } catch (error) {
    return undefined;
  }
};

export const useDeleteTodo = () => {
  const { showToast } = useToast();

  return useMutation({
    onSuccess: () => {
      queryClient.invalidateQueries(['allTodos']);
      showToast({ message: 'Todo silindi', status: 'success' });
    },
    onError: () => {
      showToast({ message: 'Todo silme hatası', status: 'error' });
    },
    mutationFn: deleteTodo,
  });
};
