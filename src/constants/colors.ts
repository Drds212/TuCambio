export const Colors = {
  // Fondos y superficies
  background: '#0B0F19',
  surface: '#151D2F',
  surfaceBorder: '#232F48',
  card: '#162035',
  cardBorder: '#263554',

  // Textos
  textPrimary: '#F8FAFC',
  textSecondary: '#94A3B8',
  textMuted: '#64748B',

  // Colores de acento e identidad
  primary: '#10B981', // Verde esmeralda para finanzas / éxito
  primaryMuted: 'rgba(16, 185, 129, 0.15)',
  
  // Tasas de cambio
  official: '#38BDF8', // Azul celeste representativo del Oficial (BCV)
  officialMuted: 'rgba(56, 189, 248, 0.15)',
  
  parallel: '#FBBF24', // Ámbar dorado representativo del Paralelo
  parallelMuted: 'rgba(251, 191, 36, 0.15)',

  // Estados
  danger: '#EF4444',
  dangerMuted: 'rgba(239, 68, 68, 0.15)',
} as const;

export type AppColors = typeof Colors;
