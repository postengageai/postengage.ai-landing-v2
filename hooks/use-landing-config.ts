import { useQuery } from '@tanstack/react-query';
import { httpClient } from '@/lib/http/client';
import { LandingConfigResponse } from '@/lib/types/landing';

export function useLandingConfig() {
  return useQuery({
    queryKey: ['landing-config'],
    queryFn: async () => {
      const response = await httpClient.get<LandingConfigResponse>(
        'api/v1/landing/config'
      );
      if (response.error) {
        throw new Error(response.error.message);
      }
      return response.data.data;
    },
    staleTime: 1000 * 60 * 60, // 1 hour
  });
}
