import { useQuery } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { ITodo } from '../types';

const getAllTodos = async (): Promise<ITodo[] | undefined> => {
  try {
    const allTodos = await axios.get<ITodo[]>('/todos');

    if (allTodos.status === 200) return allTodos.data;

    return undefined;
  } catch (error) {
    return undefined;
  }
};

export const useAllTodos = () => useQuery(['allTodos'], () => getAllTodos());
