import { useCallback, useEffect, useState } from 'react';
import { getDolarRates } from '../services/dolarApi';
import { DolarRatesMap } from '../types/dolar';

export function useDolarRates() {
  const [rates, setRates] = useState<DolarRatesMap>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchRates = useCallback(async (isRefresh = false) => {
    if (isRefresh) {
      setIsRefreshing(true);
    } else {
      setIsLoading(true);
    }
    setError(null);

    try {
      const data = await getDolarRates();
      setRates(data);
    } catch (err) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : 'No se pudo conectar con el servicio de tasas.';
      setError(errorMessage);
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchRates();
  }, [fetchRates]);

  return {
    rates,
    isLoading,
    isRefreshing,
    error,
    refetch: () => fetchRates(true),
  };
}
