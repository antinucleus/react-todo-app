import { useQuery } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { ITodo } from '../types';

const getTodo = async (id: string): Promise<ITodo | undefined> => {
  try {
    const todo = await axios.get<ITodo>(`/todos/${id}`);

    if (todo.status === 200) return todo.data;

    return undefined;
  } catch (error) {
    return undefined;
  }
};

export const useTodo = (id: string) =>
  useQuery(['todo', id], () => getTodo(id));
