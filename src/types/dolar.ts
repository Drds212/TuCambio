export type RateCategory = 'oficial' | 'paralelo';

/**
 * Estructura de respuesta de DolarApi para Venezuela (/v1/dolares)
 */
export interface DolarRateResponse {
  fuente: string;
  nombre: string;
  compra: number | null;
  venta: number | null;
  promedio: number;
  fechaActualizacion: string;
}

/**
 * Mapa tipado para acceso rápido y seguro a las tasas normalizadas
 */
export interface DolarRatesMap {
  oficial?: DolarRateResponse;
  paralelo?: DolarRateResponse;
}
