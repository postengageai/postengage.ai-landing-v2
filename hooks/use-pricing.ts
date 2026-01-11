import { useQuery } from '@tanstack/react-query';
import { httpClient } from '@/lib/http/client';
import { PricingResponse } from '@/lib/types/pricing';

export function usePricing() {
  return useQuery({
    queryKey: ['pricing-packages'],
    queryFn: async () => {
      const response = await httpClient.get<PricingResponse>(
        'api/v1/payments/packages'
      );
      if (response.error) {
        throw new Error(response.error.message);
      }
      return response.data.data;
    },
    // staleTime: 1000 * 60 * 60, // 1 hour
  });
}
