import { DolarRateResponse, DolarRatesMap } from '../types/dolar';

const DOLAR_API_BASE_URL = 'https://ve.dolarapi.com/v1';

/**
 * Consulta todas las tasas de cambio disponibles en Venezuela
 * Endpoint: GET https://ve.dolarapi.com/v1/dolares
 */
export async function getDolarRates(): Promise<DolarRatesMap> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 segundos de timeout

  try {
    const response = await fetch(`${DOLAR_API_BASE_URL}/dolares`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`Error en el servidor de DolarApi (${response.status})`);
    }

    const data: DolarRateResponse[] = await response.json();

    const ratesMap: DolarRatesMap = {};

    for (const item of data) {
      const fuenteLower = (item.fuente || '').toLowerCase();
      const nombreLower = (item.nombre || '').toLowerCase();

      if (fuenteLower.includes('oficial') || fuenteLower.includes('bcv') || nombreLower.includes('oficial')) {
        ratesMap.oficial = item;
      } else if (fuenteLower.includes('paralelo') || nombreLower.includes('paralelo')) {
        ratesMap.paralelo = item;
      }
    }

    return ratesMap;
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      throw new Error('La consulta tardó demasiado tiempo. Verifica tu conexión.');
    }
    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
}
