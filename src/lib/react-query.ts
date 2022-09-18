import { DefaultOptions, QueryClient } from '@tanstack/react-query';

const queryConfig: DefaultOptions = {
  queries: {
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 7 * 60 * 1000, // 7 minutes,
  },
};

export const queryClient = new QueryClient({ defaultOptions: queryConfig });
