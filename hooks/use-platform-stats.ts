import { useQuery } from '@tanstack/react-query';
import { httpClient } from '@/lib/http/client';

interface PlatformStats {
  replies_sent: number;
  total_automations: number;
  active_users: number;
}

export function usePlatformStats() {
  return useQuery({
    queryKey: ['platform-stats'],
    queryFn: async () => {
      const response = await httpClient.get<PlatformStats>(
        'api/v1/marketing/platform-stats'
      );
      if (response.error) {
        throw new Error(response.error.message);
      }
      return response.data.data;
    },
    staleTime: 1000 * 60 * 5, // 5 minutes — refresh more often for live feel
    refetchInterval: 1000 * 60 * 5,
  });
}
